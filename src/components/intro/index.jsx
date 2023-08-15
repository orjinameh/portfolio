import React, { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";
import okay from "../../images/okay.png"
const Intro = ({ handleClickDonation, handleClickContactMe }) => {
    const ref = useRef();
    const [word, setWord] = useState("SKILLFULLY")
    const letters = "ABCDEFGHHIJKLMNOPQRSTUVWXYX"
    var times = 0;
    useEffect(() => {
        ref.current.onmouseover = e => {
            const interval = setInterval(() => {
                e.target.innerText = e.target.innerText.split("")
                    .map((letter, index) => {
                        if (index < times) {
                            return word[index];
                        }
                        return letters[Math.floor(Math.random() * 26)]
                    })
                    .join("");
                if (times >= word.length) {
                    clearInterval(interval)
                }
                times += 1/3
            }, 30);
        }
    },[times])
    return (
        <div className="intro-container">
            <img className="okay hidden-x" src={okay} alt="" />
            <h1 className="intro-text text-white hidden">
                <span ref={ref} className="scroller">SKILLFULLY</span> CHANGING <span className="span">IDEAS</span> INTO <span className="span">TANGIBLE CREATIONS</span>.
            </h1>
        </div>
    );
}

export default Intro;