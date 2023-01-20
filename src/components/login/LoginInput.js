import { useForm } from "react-hook-form"
import loginUser from "../../api/user"

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

        const onSubmit = (data) => {
            loginUser(data)
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
                <button type= "submit">Start</button>
                {errorMessage}
            </form>
        </>
    )
}
export default LoginInput