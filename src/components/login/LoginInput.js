import { useForm } from 'react-hook-form'
import loginUser from '../../api/user'
import { useState, useEffect } from 'react'
import { storageRead, storageSave } from '../../utils/storage'
import { useUser } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

const usernameConfig = {
    required: true,
    minLength: 3
}

const LoginInput = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, setUser } = useUser()
    const navigate = useNavigate()

    //local state
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    //side effect
    useEffect(() => {
        if (user !== null) {
            navigate('profile')
        }
    }, [user, navigate])

    //handlers
    const onSubmit = async ({ username }) => {
        setLoading(true)
        const [error, userResponse] = await loginUser(username)
        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            storageSave('translator-user', userResponse)
            setUser(userResponse)
        }
        setLoading(false)

    }


    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }
        if (errors.username.type === 'required') {
            return <span>Username is required</span>
        }

        if (errors.username.type === 'minLength') {
            return <span>Username is too short</span>
        }
    })()

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Enter name"
                    {...register("username", usernameConfig)}
                />
                <button type="submit" disabled={loading}>Start</button>
                {errorMessage}
                {loading && <p>Logging in...</p>}
                {apiError && <p>{apiError}</p>}
            </form>
        </>
    )
}
export default LoginInput