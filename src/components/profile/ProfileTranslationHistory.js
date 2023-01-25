import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

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
  tenLastTranslations.reverse()
  const translationList = tenLastTranslations.map((translation, index) => (
    <ProfileTranslationHistoryItem
      key={index + "-" + translation}
      translation={translation}
    />
  ))

  return (
    <>
      <p>Translation history</p>
      <ul>{translationList}</ul>
    </>
  )
}
export default ProfileTranslationHistory
