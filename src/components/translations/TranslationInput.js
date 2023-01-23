import { useForm } from "react-hook-form"

const TranslationInput = () => {

    const { register, handleSubmit, formState: { errors } } = useForm() 

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('translation')} placeholder="Enter your text" />
            <button type="submit">Translate</button>
        </form>
    )

}

export default TranslationInput