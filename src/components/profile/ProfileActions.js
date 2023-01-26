import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageSave, storageDelete } from "../../utils/storage"
import patchTranslations from "../../api/translation"
import { useState } from "react"

const ProfileActions = () => {
  const { user, setUser } = useUser()
  const [apiError, setApiError] = useState(null)

  /* Sends a pop up for the user to confirm logout action*/
  const handleLogoutClick = () => {
    if (window.confirm("Are you sure")) {
      storageDelete(STORAGE_KEY_USER)
      setUser(null)
    }
  }

  //handler
  const handleClearClick = async () => {
    const [error, patchResponse] = await patchTranslations.clearTranslations(
      user.id
    )
    if (error !== null) {
      setApiError(error)
    }
    if (patchResponse !== null) {
      storageSave(STORAGE_KEY_USER, patchResponse)
      setUser(patchResponse)
    }
  }

  return (
    <div>
      <button onClick={handleClearClick}>Clear history</button>
      {apiError && <p>{apiError}</p>}
      <br></br>
      <button onClick={handleLogoutClick}>Log out</button>
    </div> 
  )
}
export default ProfileActions
