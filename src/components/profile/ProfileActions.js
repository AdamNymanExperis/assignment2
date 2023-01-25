import { Link } from "react-router-dom"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageSave, storageDelete } from "../../utils/storage"
import patchTranslations from '../../api/translation'


const ProfileActions = () => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        if (window.confirm('Are you sure')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }
    
    const handleClearClick = async () => {        
        const [error, patchResponse] = await patchTranslations.clearTranslations(user.id)
        if (error !== null) {
            
        }
        if (patchResponse !== null) {
            storageSave(STORAGE_KEY_USER, patchResponse)
            setUser(patchResponse)
        }  
    }

    return (
        <ul>
            <li><Link to='/translation'>Translations</Link></li>
            <li><button onClick={handleClearClick}>Clear history</button></li>
            <li><button onClick={handleLogoutClick}>Log out</button></li>
        </ul>

    )
}
export default ProfileActions