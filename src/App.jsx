import Login from "./pages/login/Login"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from "./pages/register/Register"
import './app.css'
import NotFound from "./components/elements/notFound/NotFound"
import About from "./pages/landingPage/user/About"
import Contact from "./pages/landingPage/user/Contact"
import Beranda from "./pages/landingPage/user/Beranda"
import FormJual from "./pages/landingPage/user/components/FormJual"




function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/"element={<Login/>}/>
        <Route path="/registrasi"element={<Register/>}/>
        <Route path="/beranda"element={<Beranda/>}/>
        <Route path="/kontak"element={<Contact/>}/>
        <Route path="beranda/form-jual/:idBarang" element={<FormJual />} />
        <Route path="/tentang"element={<About/>}/>
        <Route path="*"element={<NotFound/>}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App
