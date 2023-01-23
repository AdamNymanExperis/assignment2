import Header from "../components/Header"
import withAuth from "../hoc/withAuth"

const TranslationPage = () => {
    return (
        <div>
            <Header />
            <p>testing translation</p>
        </div>
    )
}
export default withAuth(TranslationPage) 