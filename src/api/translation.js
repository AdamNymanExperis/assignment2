import createHeaders from "./index.js"
const apiUrl = process.env.REACT_APP_API_URL

/* prepare an array with a newly added word to pass forward to the Patch request */
const addTranslations = async (newTranslation, translations, id) => {
  const translationsWithNew = [...translations, newTranslation]
  return patch(translationsWithNew, id)
}

/* prepares and empty array to pass forward to the Patch request to clear the translations list */
const clearTranslations = async (id) => {
  const emptyArray = []
  return patch(emptyArray, id)
}

/* Sends an HTTP Patch request, is used to add new translations to users aswell as clearing translation lists */
const patch = async (translations, id) => {
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "PATCH",
    headers: createHeaders(),
    body: JSON.stringify({
      translations: [...translations],
    }),
  })
  try {
    if (!response.ok) {
      throw new Error("Patching went wrong")
    }
    const data = await response.json()
    return [null, data]
  } catch (error) {
    return [error.message, []]
  }
}

const patchTranslations = {
  addTranslations,
  clearTranslations,
}

export default patchTranslations
