import { useForm } from 'react-hook-form'
import loginUser from '../../api/user'
import { useState } from 'react'

const LoginInput = () => {

        const usernameConfig = {
            required: true,
            minLength: 3
        }

        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm()

        const [loading, setLoading] = useState(false)

        const onSubmit = async ({username}) => {
            setLoading(true)
            const [error, user] = await loginUser(username)
            console.log('error: ', error)
            console.log('User; ', user)
            setLoading(false)
        }

        const errorMessage = (() => {
            if(!errors.username) {
                return null
            }
            if(errors.username.type === 'required') {
                return <span>Username is required</span>
            }

            if(errors.username.type === 'minLength') {
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
                <button type= "submit" disabled={loading}>Start</button>
                {errorMessage}
                {loading && <p>Logging in...</p>}
            </form>
        </>
    )
}
export default LoginInput