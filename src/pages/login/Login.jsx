import LoginForm from "./components/LoginForm"
import './login.css'

const Login = () => {
  return (
    <div>
       <div className="container-fluid login-container p-0">
        <div className="row g-0 card-body">
          <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
            <img
              src="../src/assets/illust-hero.webp"
              alt="login-cover"
              className="login-cover"
            />
          </div>
          <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center flex-column p-4">
              <h2 className="mt-3 mb- text-center">Welcome!</h2>
              <p className="text-center mb-4">Log in your account</p>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
