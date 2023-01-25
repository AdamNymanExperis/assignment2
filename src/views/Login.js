import LoginInput from "../components/login/LoginInput.js"
import "animate.css"
import "../css/loginPage.css"

const LoginPage = () => {
  return (
    <div class="content">
      <h2 id="loginTitle">Enter your name:</h2>
      <LoginInput />
    </div>
  )
}

export default LoginPage
