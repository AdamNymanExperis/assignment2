import withAuth from "../hoc/withAuth"
import TranslationInput from "../components/translations/TranslationInput"
import "./translationPage.css"

const TranslationPage = () => {
  return (
    <div className="content">
      <TranslationInput />
    </div>
  )
}
export default withAuth(TranslationPage)
