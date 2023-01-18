import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './components/loginPage.js'
import TranslationPage from './components/translationPage.js';
import ProfilePage from './components/profilePage.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/translation' element={<TranslationPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
