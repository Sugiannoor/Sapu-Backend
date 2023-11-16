import { useEffect, useState } from "react";
import InputElement from "../../../components/elements/input/InputElement"
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { ButtonElement } from "../../../components/elements/button";
import './registerForm.css'


const RegisterForm = () => {
    const [passwordFinal, setPasswordFinal] = useState("");
    const [showPassword1, setShowPassword1] = useState(false);
    const [password1, setPassword1] = useState('');
    const [showPassword2, setShowPassword2] = useState(false);
    const [password2, setPassword2] = useState('');

    const handleSubmit = () => {
        if (password1 ==="" || password2==="") {
            alert ("Password Tidak Boleh Kosong")
        } else if (password1 !== password2) {
            alert("Password dan konfirmasi password tidak cocok");
        }
        else if (password1 === password2){
            setPasswordFinal(password1); 
        }
    };

    const handleTogglePassword = () => {
        setShowPassword1(!showPassword1);
      };
      const handleTogglePassword2 = () => {
        setShowPassword2(!showPassword2);
      };
      const handleChangePassword1 = (e) => {
        const { name, value } = e.target;
        if (name === "password") {
          setPassword1(value);
      }
    }
      const handleChangePassword2 = (e) => {
        const { name, value } = e.target;
        if (name === "confirm_password") {
          setPassword2(value);
      }
    }
    useEffect(() => {
        if (passwordFinal) {
            console.log("Password Final:", passwordFinal);
        }
    }, [passwordFinal]); 
  return (
    <div className="card card-registForm mx-auto"style={{zIndex:1}}>
    <div className="card-body position-relatif">
        <InputElement
            label="Nama Lengkap"
            type="text"
            id="full_name"
            name="full_name"
            placeholder="Masukkan Nama Lengkap"
            className="mb-3"
            />
        <InputElement
            label="Username"
            type="text"
            id="username"
            name="username"
            placeholder="Masukkan username"
            className="mb-3"
            />

           <InputElement
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Masukkan email"
            className="mb-3"
            />
             <span
            className="form-control-icon mx-2 pt-2"
            onClick={handleTogglePassword}
            >
            {showPassword1 ? (
              <BsEye color="green" size={22} />
              ) : (
              <BsEyeSlash color="green" size={22} />
              )}
          </span>
    
        <InputElement
            label="Password"
            type={showPassword1 ? "text":"password"}
            name="password"
            id= "password"
            placeholder="Masukkan Password"
            className="mb-3"
            value= {password1}
            onChange ={handleChangePassword1}
          />
           <span
            className="form-control-icon mx-2 pt-2"
            onClick={handleTogglePassword2}
            >
            {showPassword2 ? (
                <BsEye color="green" size={22} />
                ) : (
              <BsEyeSlash color="green" size={22} />
            )}
          </span>
         
        <InputElement
            label="Konfirmasi Password"
            type={showPassword2 ? "text":"password"}
            name="confirm_password"
            id="confirm_password"
            value= {password2}
            placeholder="Konfirmasi Password"
            className="mb-3 form-control"
            onChange= {handleChangePassword2}
          />
         
            <ButtonElement
            isLoading={false}
            type="submit"
            className="btn btn-success mt-2 w-10"
            handleClick={handleSubmit}>
                Daftar
            </ButtonElement>
                </div>
        </div>
  )
};


export default RegisterForm;
