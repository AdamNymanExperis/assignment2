import Header from "../components/Header.js"
import LoginInput from "../components/login/LoginInput.js"
import "animate.css"
import "../css/loginPage.css"

const LoginPage = () => {
  return (
    <div>
      <Header />
      <h2 id="loginTitle">Enter your name:</h2>
      <LoginInput />
    </div>
  )
}

export default LoginPage
