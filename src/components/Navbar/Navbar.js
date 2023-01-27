import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import "./navbar.css"

const Navbar = () => {
  const { user } = useUser()

  return (
    <nav>
      {user !== null && (
        <ul id = "navList">
          <li>
            <NavLink to="/translation">Translation</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}
export default Navbar
