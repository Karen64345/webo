import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faTruck, faRecycle, faHandsHelping } from "@fortawesome/free-solid-svg-icons";

function HowItWorks() {
    return (
        <section id="how-it-works" className="how-it-works">
            <h2 className="section-title">How It Works</h2>
            <div className="steps-container">
                <div className="step">
                    <div className="step-icon">
                        <FontAwesomeIcon icon={faCamera} />
                    </div>
                    <h3>Report</h3>
                    <p>Take a photo of waste and submit a report with location details.</p>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <FontAwesomeIcon icon={faTruck} />
                    </div>
                    <h3>Collect</h3>
                    <p>Local authorities are notified to collect the reported waste.</p>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <FontAwesomeIcon icon={faRecycle} />
                    </div>
                    <h3>Recycle</h3>
                    <p>Waste is sorted and processed for reuse and recycling.</p>
                </div>
                <div className="step">
                    <div className="step-icon">
                        <FontAwesomeIcon icon={faHandsHelping} />
                    </div>
                    <h3>Support</h3>
                    <p>Recycled materials help communities and create jobs.</p>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;