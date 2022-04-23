import React from 'react';
import "./modal.scss"
const Modal = ({classModal}) => {
    return (
        <div className="modal-section">
            <div className="container">
                <div className="modal">
                    <button onClick={() => classModal(false)}>X</button>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/L1mAtyBI77I"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Modal;