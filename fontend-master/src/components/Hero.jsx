import React from "react";
import heroImage from "../assets/Turn_waste.jpg"; 

function Hero({ openLoginModal, isLoggedIn }) {
    const handleReportClick = () => {
        if (isLoggedIn) {
            document.querySelector("#report").scrollIntoView({ behavior: "smooth" });
        } else {
            openLoginModal();
        }
    };

    const handleLearnMoreClick = () => {
        document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="hero"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            <div className="hero-content">
                <h2>Turn Waste Into Opportunity</h2>
                <p>
                    Report waste in your community and help create a cleaner environment
                    while supporting underprivileged families.
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary" onClick={handleReportClick}>
                        Report Waste Now
                    </button>
                    <button className="btn-secondary" onClick={handleLearnMoreClick}>
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;