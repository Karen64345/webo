import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/avatar.jpg"; // Corrected import path

function Testimonials() {
    const [current, setCurrent] = useState(0);

    const testimonials = [
        {
            quote: "EcoAction transformed our community by turning waste into opportunities!",
            author: "Jane Doe",
            role: "Community Leader",
        },
        {
            quote: "The waste reporting system is so easy to use and effective.",
            author: "John Smith",
            role: "Local Resident",
        },
        {
            quote: "A cleaner environment and jobs for our people—what more could we ask for?",
            author: "Aisha Khan",
            role: "Volunteer",
        },
    ];

    const nextTestimonial = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const testimonial = testimonials[current];

    return (
        <section id="testimonials" className="testimonials">
            <h2 className="section-title">What People Say</h2>
            <div className="testimonial-slider">
                <div className="testimonial active">
                    <p className="quote">{testimonial.quote}</p>
                    <div className="author">
                        <img src={avatar} alt="User avatar" className="avatar" /> {/* Use imported avatar */}
                        <div className="author-info">
                            <h4>{testimonial.author}</h4>
                            <p>{testimonial.role}</p>
                        </div>
                    </div>
                </div>
                <div className="slider-controls">
                    <button className="prev-btn" onClick={prevTestimonial}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div className="dots">
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === current ? "active" : ""}`}
                                onClick={() => setCurrent(index)}
                            ></span>
                        ))}
                    </div>
                    <button className="next-btn" onClick={nextTestimonial}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;