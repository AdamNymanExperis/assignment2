import { useForm } from "react-hook-form";

const LoginInput = () => {
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm()

        const onSubmit = (data) => {
            console.log(data)
        }
    

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                type="text"
                placeholder="Enter name"
                {...register("name")}
                />
                <button type= "submit">Start</button>
            </form>
        </>
    )
}
export default LoginInput