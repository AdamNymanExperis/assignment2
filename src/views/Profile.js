import Header from "../components/Header.js"
import ProfileActions from "../components/profile/ProfileActions.js"
import ProfileHeaders from "../components/profile/ProfileHeader.js"
import ProfileTranslationHistory from "../components/profile/ProfileTranslationHistory.js"
import { useUser } from "../context/UserContext.js"
import withAuth from "../hoc/withAuth.js"

const ProfilePage = () => {
  const { user } = useUser()

  return (
    <>
      <Header />
      <ProfileHeaders username={user.username} />
      <ProfileActions />
      <ProfileTranslationHistory translations={user.translations} />
      <p>testing profile</p>
    </>
  )
}

export default withAuth(ProfilePage)
