import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-logo">
                    <FontAwesomeIcon icon={faLeaf} />
                    <h3>EcoAction</h3>
                    <p>Building a cleaner world, one report at a time.</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#report">Report Waste</a></li>
                        <li><a href="#impact">Our Impact</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-newsletter">
                    <h3>Stay Updated</h3>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                    <form id="newsletterForm">
                        <input type="email" placeholder="Your Email Address" required />
                        <button type="submit" className="btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 EcoAction. All Rights Reserved.</p>
                <div className="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;