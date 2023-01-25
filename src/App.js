import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./views/Login.js"
import TranslationPage from "./views/Translation.js"
import ProfilePage from "./views/Profile.js"
import Navbar from "./components/Navbar/Navbar.js"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/translation" element={<TranslationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
