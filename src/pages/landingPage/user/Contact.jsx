import FooterComponent from "../../../components/elements/footer/FooterComponent"
import { NavbarComponent } from "../../../components/navbar"
import CardContact from "./components/CardContact"


const Contact = () => {
  return (
    <div>
      <NavbarComponent/>
      <div className="container p-4">
      <CardContact/>
      </div>
      <FooterComponent/>
    </div>
  )
}

export default Contact
