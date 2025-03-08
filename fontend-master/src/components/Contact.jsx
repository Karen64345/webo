import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2 className="section-title">Contact Us</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="info-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p>123 Green Street, Eco City</p>
                    </div>
                    <div className="info-item">
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+91 1234567890</p>
                    </div>
                    <div className="info-item">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>info@ecoaction.org</p>
                    </div>
                    <div className="social-icons">
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="social-icon">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>
                <div className="contact-form">
                    <form id="contactForm">
                        <div className="form-group">
                            <input type="text" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group">
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;