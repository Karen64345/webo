import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function SuccessModal({ isOpen, closeModal }) {
    return (
        <div className={`modal ${isOpen ? "active" : ""}`} onClick={closeModal}>
            <div className="modal-content success-modal" onClick={(e) => e.stopPropagation()}>
                <span className="close-modal" onClick={closeModal}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                <div className="success-icon">
                    <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h2>Report Submitted Successfully!</h2>
                <p>Thank you for helping make our community cleaner. Your report has been sent to the authorities.</p>
                <p>
                    Report ID: <span id="reportId">WR-2025-0001</span>
                </p>
                <button className="btn-primary">Track Your Report</button>
                <button className="btn-secondary" onClick={closeModal}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default SuccessModal;