import ProfileAvatar from "./ProfileAvatar.js"
import "animate.css"
import "../css/header.css"

//<ProfileAvatar />
const Header = () => {
  return (
    <header>
      <h1 id="title">Lost in Translation</h1>

      <ProfileAvatar />
    </header>
  )
}

export default Header
