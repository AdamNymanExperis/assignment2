import { useState } from "react"
import { useForm } from "react-hook-form"

const TranslationInput = () => {

    const [translationArray, setTranslationArray] = useState([])

    const { register, handleSubmit, formState: { errors } } = useForm() 

    const onSubmit = ({translation}) => {
        setTranslationArray(Array.from(translation))       
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('translation')} placeholder="Enter your text" />
            <button type="submit">Translate</button>
            <div>
                {translationArray.map((letter,index)=> (
                    <img key={index} alt="" src={"img/individial_signs/"+letter+".png"}></img>  
                ))}
            </div>
        </form>
    )

}

export default TranslationInput