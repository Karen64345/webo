import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import ReportWaste from "./components/ReportWaste";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import SuccessModal from "./components/SuccessModal";
import "./App.css";

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [isSignUpMode, setIsSignUpMode] = useState(false); // New state for signup mode

    const openLoginModal = (signUpMode = false) => {
        setIsSignUpMode(signUpMode); // Set mode based on parameter
        setIsLoginOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeLoginModal = () => {
        setIsLoginOpen(false);
        setIsSignUpMode(false); // Reset mode on close
        document.body.style.overflow = "auto";
    };

    const openSuccessModal = () => {
        setIsSuccessOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeSuccessModal = () => {
        setIsSuccessOpen(false);
        document.body.style.overflow = "auto";
    };

    const handleLogin = (name) => {
        setIsLoggedIn(true);
        setUserName(name || "User");
        closeLoginModal();
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserName("");
    };

    return (
        <div className="App">
            <Header
                openLoginModal={openLoginModal}
                isLoggedIn={isLoggedIn}
                userName={userName}
                handleLogout={handleLogout}
            />
            <main>
                <Hero openLoginModal={openLoginModal} isLoggedIn={isLoggedIn} />
                <HowItWorks />
                <About />
                <ReportWaste openSuccessModal={openSuccessModal} />
                <Impact />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <LoginModal
                isOpen={isLoginOpen}
                closeModal={closeLoginModal}
                handleLogin={handleLogin}
                isSignUpMode={isSignUpMode} // Pass signup mode
            />
            <SuccessModal isOpen={isSuccessOpen} closeModal={closeSuccessModal} />
        </div>
    );
}

export default App;