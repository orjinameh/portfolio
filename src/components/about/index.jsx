import React from "react";
import "./index.css";
import peace from "../../images/peace.png"

const About = () => {
    return (
        <div className="about-div">
            <h2 className="ab hidden">About</h2>
            <p className="p hidden">
                Hello stranger! <span>&#128400;</span>, my name is Orjinameh Stephen, a software developer based in Nigeria &#x1F1F3;&#x1F1EC;.
                I develop full-stack web application using the MERN stack,
                but I mostly love working on the front-end using CSS and REACT.
            </p>
            <div className="peace-div">
                <img src={peace} alt="" className="peace" />
            </div>
        </div>
    );
}
 
export default About