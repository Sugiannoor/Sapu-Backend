import { FaCashRegister } from "react-icons/fa6";
import RegisterForm from "./components/RegisterForm";
import "./register.css";

const Register = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="header-register text-center mt-3 mb-5">
          <FaCashRegister color="green" size={50} />
          <p className="text-success">Registrasi</p>
        </div>
        <div className="h-20 bg-success"></div>
            <RegisterForm />
      </div>
      <svg
        className="position-fixed bottom-0 z-index-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#116530"
            fillOpacity="1"
            d="M0,0L48,48C96,96,192,192,288,202.7C384,213,480,139,576,128C672,117,768,171,864,208C960,245,1056,267,1152,261.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            style={{ zIndex: -1 }}></path>
        </svg>
      </svg>
    </div>
  );
};

export default Register;
