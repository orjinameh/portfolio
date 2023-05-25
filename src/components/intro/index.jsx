import React from "react";
import "./index.css";
import profilePhoto from "../../images/graphics/20230429_210114.jpg"
const Intro = ({ handleClickDonation, handleClickContactMe }) => {
    return (
        <>
            <div className="intro-container">
                <h2>Peter Stephen</h2>
                <div className="short-line"></div>
                <div className="img-container">
                    <img src={profilePhoto} alt="" />
                    <h3 onClick={handleClickDonation}>Send Donation</h3>
                </div>
                <div className="one">
                    <ul>
                        <li>
                            Web ui/ux design
                        </li>
                        <li>
                            coding websites
                        </li>
                        <li>
                            coding mobile apps
                        </li>
                    </ul>
                </div>
                <div onClick={handleClickContactMe} className="contact">
                    <p>contact me</p>
                    <svg className="arrow-right gray-background" xmlns="http://www.w3.org/2000/svg" fill="#919191" viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                </div>
            </div>
        </>
    );
}

export default Intro;