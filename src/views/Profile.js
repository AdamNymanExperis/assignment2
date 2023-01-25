import ProfileActions from "../components/profile/ProfileActions.js"
import ProfileHeaders from "../components/profile/ProfileHeader.js"
import ProfileTranslationHistory from "../components/profile/ProfileTranslationHistory.js"
import { useUser } from "../context/UserContext.js"
import withAuth from "../hoc/withAuth.js"
import "../css/profilePage.css"

const ProfilePage = () => {
  const { user } = useUser()

  return (
    <div className="content">
      <ProfileHeaders username={user.username} />
      <ProfileActions />
      <ProfileTranslationHistory translations={user.translations} />
    </div>
  )
}

export default withAuth(ProfilePage)
