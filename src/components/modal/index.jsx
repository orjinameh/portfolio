import React from "react";
import "./index.css"

const Modal = ({content, handleClick}) => {
    return (
        <>
            <div onClick={handleClick} className="modal-background"></div>
            <div className="modal-container">
                {content}
            </div>
        </>
    );
}
 
export default Modal;