import createHeaders from './index.js'
import { useUser } from "../context/UserContext"
import { STORAGE_KEY_USER } from '../const/storageKeys.js'
const apiUrl = process.env.REACT_APP_API_URL


const patchTranslations = async (newTranslation, translations, id) => {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PATCH', 
        headers: createHeaders(),
        body: JSON.stringify({
            translations: [...translations, newTranslation] 
        })
    })
    try {
        if (!response.ok) {
            throw new Error('Patching went wrong')
        }
        const data = await response.json()
        return [null, data]

    } catch (error) {
        return [error.message, []]
    }

}

export default patchTranslations