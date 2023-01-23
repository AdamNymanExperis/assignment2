import Header from "../components/Header.js"
import withAuth from "../hoc/withAuth.js"

const ProfilePage = () => {
    return (
        <div>
            <Header />
            <p>testing profile</p>
        </div>

    )
}

export default withAuth(ProfilePage) 