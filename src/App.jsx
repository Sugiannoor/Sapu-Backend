import Login from "./pages/login/Login"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from "./pages/register/Register"
import './app.css'
import NotFound from "./components/elements/notFound/NotFound"
import About from "./pages/landingPage/user/About"
import Contact from "./pages/landingPage/user/Contact"
import Beranda from "./pages/landingPage/user/Beranda"




function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/login"element={<Login/>}/>
        <Route path="/registrasi"element={<Register/>}/>
        <Route path="/beranda"element={<Beranda/>}/>
        <Route path="/kontak"element={<Contact/>}/>
        <Route path="/tentang"element={<About/>}/>
        <Route path="*"element={<NotFound/>}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App
