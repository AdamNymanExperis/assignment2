import { useState } from "react"
import { useForm } from "react-hook-form"
import { useUser } from "../../context/UserContext"
import { storageSave } from "../../utils/storage"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import patchTranslations from "../../api/translation.js"

const translationConfig = {
  maxLength: 40,
}

const TranslationInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  
  const { user, setUser } = useUser()
  
  //localstates
  const [translationArray, setTranslationArray] = useState([])
  const [apiError, setApiError] = useState(null)

  //handlers
  const onSubmit = async ({ translation }) => {
    setTranslationArray(Array.from(translation))
    const [error, patchResponse] = await patchTranslations.addTranslations(
      translation,
      user.translations,
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

  const errorMessage = (() => {
    if (!errors.translation) {
      return null
    }
    if (errors.translation.type === "maxLength") {
      return (
        <span>Translation has too many characters. Max 40 characters!</span>
      )
    }
  })()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div id="translationTextBox">
        <h1>Translation</h1>
        <div className="inputDiv">
          <input
            type="text"
            {...register("translation", translationConfig)}
            placeholder="Enter your text"
          />
          <button type="submit">Translate</button>
        </div>
      </div>

      {errorMessage}
      {apiError && <p>{apiError}</p>}

      <div id="translationBox">
        {translationArray.map((letter, index) => (
          <img
            key={index}
            alt=""
            src={"img/individial_signs/" + letter + ".png"}
          ></img>
        ))}
      </div>
    </form>
  )
}

export default TranslationInput
