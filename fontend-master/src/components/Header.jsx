import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

function Header({ openLoginModal, isLoggedIn, userName, handleLogout }) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("#home");

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        if (targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth",
            });
            setIsNavOpen(false);
            setActiveSection(targetId);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const sections = document.querySelectorAll("section[id]");
            let current = "#home";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                if (
                    window.pageYOffset >= sectionTop &&
                    window.pageYOffset < sectionTop + sectionHeight
                ) {
                    current = `#${section.getAttribute("id")}`;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // New function to open modal in signup mode
    const openSignUpModal = () => {
        openLoginModal(true); // Pass true to indicate signup mode
    };

    return (
        <header className={isScrolled ? "scrolled" : ""}>
            <nav>
                <div className="logo">
                    <FontAwesomeIcon icon={faLeaf} />
                    <h1>EcoAction</h1>
                </div>
                <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
                    <li>
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, "#home")}
                            className={activeSection === "#home" ? "active" : ""}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            onClick={(e) => handleNavClick(e, "#about")}
                            className={activeSection === "#about" ? "active" : ""}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#report"
                            onClick={(e) => handleNavClick(e, "#report")}
                            className={activeSection === "#report" ? "active" : ""}
                        >
                            Report Waste
                        </a>
                    </li>
                    <li>
                        <a
                            href="#impact"
                            onClick={(e) => handleNavClick(e, "#impact")}
                            className={activeSection === "#impact" ? "active" : ""}
                        >
                            Impact
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, "#contact")}
                            className={activeSection === "#contact" ? "active" : ""}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
                <div className={`auth-buttons ${isNavOpen ? "active" : ""}`}>
                    {isLoggedIn ? (
                        <div className="user-profile">
                            <span>Welcome, {userName}</span>
                            <button className="btn-secondary" onClick={handleLogout}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <button className="btn-secondary" onClick={() => openLoginModal(false)}>
                                Login
                            </button>
                            <button className="btn-primary" onClick={openSignUpModal}>
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
                <div className={`hamburger ${isNavOpen ? "active" : ""}`} onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
}

export default Header;