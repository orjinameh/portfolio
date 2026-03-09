import React from "react";
import "./index.css";

const About = () => {
    return (
        <div className="about-div">
            <h2 className="ab hidden">About</h2>
            <p className="p hidden">
                Hello! I'm <span className="highlight">Orjinameh Peter Stephen</span>, a Full-Stack Developer and final-year Mechatronics & Systems Engineering student at ATBU Bauchi, Nigeria.
            </p>
            <p className="p hidden">
                I build modern web applications with the MERN stack, and I specialize in bridging the gap between <span className="highlight">industrial automation</span> and <span className="highlight">modern web technology</span> — combining my engineering background with 3 years of JavaScript/TypeScript experience.
            </p>
            <div className="skills-grid hidden">
                <div className="skill-category">
                    <h3>Frontend</h3>
                    <p>React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div className="skill-category">
                    <h3>Backend</h3>
                    <p>Node.js, Express, MongoDB, REST APIs</p>
                </div>
                <div className="skill-category">
                    <h3>Industrial</h3>
                    <p>CODESYS, Modbus TCP, SCADA, OPC-UA</p>
                </div>
                <div className="skill-category">
                    <h3>Tools</h3>
                    <p>Git, Docker, WebSockets, JWT</p>
                </div>
            </div>
        </div>
    );
}

export default About;