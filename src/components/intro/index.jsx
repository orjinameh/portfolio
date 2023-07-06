import React from "react";
import "./index.css";
import okay from "../../images/okay.png"
const Intro = ({ handleClickDonation, handleClickContactMe }) => {
    return (
            <div className="intro-container">
                <img className="okay" src={okay} alt="" />
                <h1 className="intro-text text-white ">
                    skillfully changing <span>ideas</span> into tangible creations.
                </h1>
            </div>
    );
}

export default Intro;