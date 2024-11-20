import React from "react";

function Modal(props) {

    function closeModal() {
        props.closeModal();
    }

    return (
        <div className="Modal" onClick={closeModal}>
            <div className="modalBody" onClick={(e) => e.stopPropagation()}>
                <button className="modalCloseBtn" onClick={closeModal}>
                <i className="xi-close"></i>
                </button>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;