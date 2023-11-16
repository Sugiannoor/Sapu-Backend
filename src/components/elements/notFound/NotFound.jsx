
import { RiPagesLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IoReturnDownBackOutline } from "react-icons/io5";
import "./notFound.css";
import { ButtonElement } from "../button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div id="error">
      <div className="error-page container">
        <div className="d-flex justify-content-center align-items-center error-page-content">
          <div className="text-center">
            <RiPagesLine size={80} />
            <h1 className="error-title my-2">Oops! Page Not Found</h1>
            <p className="fs-5 text-gray-600">
              The page you are looking not found.
            </p>
            <ButtonElement
              type="button"
              className="btn btn-success bg-success"
              handleClick={() => navigate(-1)}
            >
              Go Back
              <span className="ms-2">
                <IoReturnDownBackOutline />
              </span>
            </ButtonElement>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
