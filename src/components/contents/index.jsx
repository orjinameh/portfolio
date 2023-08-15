import React, { useLayoutEffect, useRef, useState } from "react";
import "./index.css";
import con1 from "../../images/web/Capture.jpg"
import con2 from "../../images/web/Capture2.jpg"
import con3 from "../../images/web/Capture3.jpg"
import con4 from "../../images/web/Capture4.jpg"
import con5 from "../../images/web/Capture5.jpg"
import con6 from "../../images/web/Capture6.jpg"
import con7 from "../../images/web/Capture7.jpg"
const Content = ({ carouselArray }) => {
    const track = useRef();
    const [percentage, setPercentage] = useState(0);
    const [unNextPercentage, setUnNextPercentage] = useState(0);
    const [nextPercentage, setNextPercentage] = useState(Math.max(Math.min(unNextPercentage, 0), -100));
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [mouseDownAt, setMouseDownAt] = useState(0);
    const [mouseDelta, setMouseDelta] = useState(0);
    const maxDelta = window.innerWidth / 2;
    useLayoutEffect(() => {
        if(window.innerWidth>450){
            window.onmousedown = e => {
                setMouseDownAt(e.clientX);
            };
            window.onmouseup = () => {
                setMouseDownAt(0);
                setPrevPercentage(nextPercentage);
            };
            window.onmousemove = e => {
                if (mouseDownAt === 0) return;
                setMouseDelta(parseFloat(mouseDownAt) - e.clientX);
                setPercentage((mouseDelta / maxDelta) * -100);
                setUnNextPercentage(parseFloat(prevPercentage) + percentage);
                setNextPercentage(Math.max(Math.min(unNextPercentage, 0), -100));
                track.current.animate({ transform: `translate(${nextPercentage}%,0%)` },
                    { duration: 1200, fill: "forwards" });
                for(const image of document.getElementById("image-track").getElementsByClassName("image")){
                    image.animate({ objectPosition: `${100 + nextPercentage}% 50%` },
                    { duration: 1200, fill: "forwards" });
                }
            }
        
        }
    })
    return (
        <>
            <div className="contain">
                <div ref={track} id="image-track">
                        <img className="image hidden" draggable="false" src={con1} alt="" />
                        <h2>Leo farms</h2>
                        <img className="image no hidden" draggable="false" src={con2} alt="" />
                        <img className="image no hidden" draggable="false" src={con3} alt="" />
                        <img className="image hidden" draggable="false" src={con4} alt="" />
                        <h2>tic-tac-toe</h2>
                        <img className="image hidden" draggable="false" src={con5} alt="" />
                        <h2>portfolio v1</h2>
                        <img className="image hidden" draggable="false" src={con6} alt="" />
                        <h2>Leo farms</h2>
                        <img className="image no hidden" draggable="false" src={con7} alt="" />
                </div>
            </div>
        </>
    );
}

export default Content;