import React, { useState, useEffect, useRef } from "react";
import communityImpact from "../assets/Community impact.jpg"; 

function About() {
    const [wasteCollected, setWasteCollected] = useState(0);
    const [reportsResolved, setReportsResolved] = useState(0);
    const [jobsCreated, setJobsCreated] = useState(0);
    const statsRef = useRef(null);

    const animateCounter = (setter, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setter(target);
                clearInterval(timer);
            } else {
                setter(Math.floor(start));
            }
        }, 16);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateCounter(setWasteCollected, 250);
                    animateCounter(setReportsResolved, 1250);
                    animateCounter(setJobsCreated, 85);
                    observer.unobserve(statsRef.current);
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    return (
        <section id="about" className="about">
            <div className="about-content">
                <h2 className="section-title">Our Mission</h2>
                <p>
                    EcoAction connects citizens, authorities, and communities to create a sustainable
                    waste management ecosystem that benefits everyone.
                </p>
                <p>
                    We aim to reduce pollution, create employment opportunities, and support
                    underprivileged communities through efficient waste management and recycling.
                </p>
                <div className="stats-container" ref={statsRef}>
                    <div className="stat">
                        <h3>{wasteCollected.toLocaleString()}</h3>
                        <p>Tons of Waste Collected</p>
                    </div>
                    <div className="stat">
                        <h3>{reportsResolved.toLocaleString()}</h3>
                        <p>Reports Resolved</p>
                    </div>
                    <div className="stat">
                        <h3>{jobsCreated.toLocaleString()}</h3>
                        <p>Jobs Created</p>
                    </div>
                </div>
            </div>
            <div className="about-image">
                <img src={communityImpact} alt="Community impact" />
            </div>
        </section>
    );
}

export default About;

