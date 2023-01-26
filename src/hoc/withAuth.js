import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"

/* If the user isn't logged in, send them back to the login page */
const withAuth = (Component) => (props) => {
  const { user } = useUser()
  if (user !== null) {
    return <Component {...props} />
  } else {
    return <Navigate to="/" />
  }
}

export default withAuth
