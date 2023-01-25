import Header from "../components/Header"
import withAuth from "../hoc/withAuth"
import TranslationInput from "../components/translations/TranslationInput"

const TranslationPage = () => {
  return (
    <div>
      <Header />
      <p>testing translation</p>
      <section id="">
        <TranslationInput />
      </section>
    </div>
  )
}
export default withAuth(TranslationPage)
