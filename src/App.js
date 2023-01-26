import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./views/Login.js"
import TranslationPage from "./views/Translation.js"
import ProfilePage from "./views/Profile.js"
import Header from "./components/Header.js"
import Navbar from "./components/Navbar/Navbar.js"
import EasterEgg from "./aEasterEgg/EasterEgg.js"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/translation" element={<TranslationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/easterEgg" element={<EasterEgg />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
