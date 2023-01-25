import Header from "../components/Header"
import withAuth from "../hoc/withAuth"
import TranslationInput from "../components/translations/TranslationInput"
import "../css/translationPage.css"

const TranslationPage = () => {
  return (
    <div class="content">
      <h1>Translation</h1>
      <TranslationInput />
    </div>
  )
}
export default withAuth(TranslationPage)
