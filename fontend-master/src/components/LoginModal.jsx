import React, { useState, useEffect } from "react";
import "../login.css";
import logo from "../assets/WasteLinklogo.png";

function LoginModal({ isOpen, closeModal, handleLogin, isSignUpMode }) {
    const [isActive, setIsActive] = useState(isSignUpMode); // Initialize based on prop
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const [signUpName, setSignUpName] = useState("");
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");
    const [userType, setUserType] = useState("student");

    useEffect(() => {
        setIsActive(isSignUpMode); // Update state when prop changes
    }, [isSignUpMode]);

    const handleSignIn = (e) => {
        e.preventDefault();
        if (signInEmail === "admin" && signInPassword === "admin") {
            handleLogin("Admin");
        } else {
            alert("Invalid username or password!");
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        handleLogin(signUpName || "User");
        console.log("Sign Up:", { signUpName, signUpEmail, signUpPassword, userType });
    };

    const toggleToSignIn = (e) => {
        e.preventDefault();
        setIsActive(false);
    };

    const toggleToSignUp = (e) => {
        e.preventDefault();
        setIsActive(true);
    };

    if (!isOpen) return null;

    return (
        <div className="modal active">
            <div className="modal-content" style={{ padding: 0 }}>
                <span className="close-modal" onClick={closeModal}>×</span>
                <div className={`container ${isActive ? "active" : ""}`} id="container">
                    <div className="sign-up">
                        <form onSubmit={handleSignUp}>
                            <h1>Create Account</h1>
                            <div className="icons">
                                <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                            </div>
                            <span>or use email for registration</span>
                            <input
                                type="text"
                                placeholder="Name"
                                value={signUpName}
                                onChange={(e) => setSignUpName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                value={signUpEmail}
                                onChange={(e) => setSignUpEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={signUpPassword}
                                onChange={(e) => setSignUpPassword(e.target.value)}
                            />
                            <select
                                id="user-type"
                                name="user-type"
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                            >
                                <option value="student">Student</option>
                                <option value="university">University</option>
                            </select>
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>

                    <div className="sign-in">
                        <form onSubmit={handleSignIn}>
                            <h1>Sign In</h1>
                            <div className="icons">
                                <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
                                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                            </div>
                            <span>or use email password</span>
                            <input
                                type="text"
                                placeholder="Email"
                                value={signInEmail}
                                onChange={(e) => setSignInEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={signInPassword}
                                onChange={(e) => setSignInPassword(e.target.value)}
                            />
                            <a href="#">Forgot password</a>
                            <button type="submit">Sign In</button>
                        </form>
                    </div>

                    <div className="toogle-container">
                        <div className="toogle">
                            <div className="toogle-panel toogle-left">
                                <div className="logo">
                                    <img src={logo} alt="Logo" width="300" height="200" />
                                </div>
                                <h1>Welcome User!</h1>
                                <p>If you already have an account</p>
                                <button className="hidden" onClick={toggleToSignIn}>
                                    Sign In
                                </button>
                            </div>
                            <div className="toogle-panel toogle-right">
                                <div className="logo">
                                    <img src={logo} alt="Logo" width="300" height="200" />
                                </div>
                                <h1>Hello, User!</h1>
                                <p>If you don't have an account</p>
                                <button className="hidden" onClick={toggleToSignUp}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;