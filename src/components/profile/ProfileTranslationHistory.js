import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

/* gets the last 10 translations from a user and displays them as a list */
const ProfileTranslationHistory = ({ translations }) => {
  let tenLastTranslations = []
  let spliceTranslations = [...translations]
  if (translations.length > 10) {
    tenLastTranslations = spliceTranslations.splice(
      translations.length - 10,
      translations.length
    )
  } else {
    tenLastTranslations = translations
  }
  const translationList = tenLastTranslations.map((translation, index) => (
    <ProfileTranslationHistoryItem
      key={index + "-" + translation}
      translation={translation}
    />
  ))

  return (
    <div>
      <p>Translation history</p>
      <ul>{translationList}</ul>
    </div>
  )
}
export default ProfileTranslationHistory
