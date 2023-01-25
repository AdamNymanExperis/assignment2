import { useState } from "react"
import { useForm } from "react-hook-form"
import { useUser } from "../../context/UserContext"
import { storageSave } from "../../utils/storage"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import patchTranslations from '../../api/translation.js'

const TranslationInput = () => {

    const { user, setUser } = useUser()

    const [translationArray, setTranslationArray] = useState([])

    const { register, handleSubmit, formState: { errors } } = useForm() 

    const onSubmit = async ({translation}) => {
        setTranslationArray(Array.from(translation))
        const [error, patchResponse] = await patchTranslations.addTranslations(translation, user.translations, user.id)
        if (error !== null) {
            
        }
        if (patchResponse !== null) {
            storageSave(STORAGE_KEY_USER, patchResponse)
            setUser(patchResponse)
        }  
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