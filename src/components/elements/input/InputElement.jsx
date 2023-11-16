
import "./input.css";
import PropTypes from 'prop-types';


const InputElement = ({label, ...rest}) => {
  
  return (
      <>
      {label && (
        <label htmlFor={rest.id} className={`form-label label-input`}>
          {label}
        </label>
      )}
       <input
          {...rest}
          className={`form-input form-control ${rest.className || ""} ${
            rest.error ? "is-invalid" : ""
          }`}
        />
        {rest.error && rest.errorMessage && (
          <div className="invalid-feedback">{rest.errorMessage}</div>
        )}
      </>
    );
  }

  InputElement.propTypes = {
    label: PropTypes.string,
  };
  
export default InputElement;
