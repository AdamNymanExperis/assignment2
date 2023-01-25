import withAuth from "../hoc/withAuth"
import TranslationInput from "../components/translations/TranslationInput"
import "../css/translationPage.css"

const TranslationPage = () => {
  return (
    <div className="content">
      <h1>Translation</h1>
      <TranslationInput />
    </div>
  )
}
export default withAuth(TranslationPage)
