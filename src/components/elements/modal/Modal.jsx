import { Modal as Dialog } from "react-bootstrap";
import PropTypes from "prop-types";
import "./modal.css";



const Modal = (props) => {
  return (
    <Dialog
      show={props.show}
      onHide={props.onHide}
      backdrop={props.backdrop}
      size={props.size}
      className={`modal-borderless modal-container ${
        props.className ? props.className : ""
      }`}
    >
      <Dialog.Header closeButton={props.closeButton} className="mx-3 mt-3">
        <Dialog.Title className="modal_title">{props.title}</Dialog.Title>
      </Dialog.Header>
      {props.description && (
        <div className="modal-descriptions mx-3">
          <div className="">{props.description}</div>
        </div>
      )}
      <Dialog.Body className="m-3">{props.children}</Dialog.Body>
    </Dialog>
  );
};

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["static"])]),
    size: PropTypes.string,
    closeButton: PropTypes.bool,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
  };

export default Modal;
