import React, { useLayoutEffect, useRef, useState } from "react";
import "./index.css";
import plcDashboard from "../../images/web/plc-dashboard.png"
import plcHistory from "../../images/web/plc-history.png"
import accuguide from "../../images/web/accuguide.png"
import sharkord from "../../images/web/sharkord.png"

const Content = () => {
    const track = useRef();
    const [nextPercentage, setNextPercentage] = useState(0);
    const [prevPercentage, setPrevPercentage] = useState(0);
    const [mouseDownAt, setMouseDownAt] = useState(0);
    const maxDelta = window.innerWidth / 2;

    useLayoutEffect(() => {
        if (window.innerWidth > 450) {
            window.onmousedown = e => setMouseDownAt(e.clientX);
            window.onmouseup = () => {
                setMouseDownAt(0);
                setPrevPercentage(nextPercentage);
            };
            window.onmousemove = e => {
                if (mouseDownAt === 0) return;
                const delta = parseFloat(mouseDownAt) - e.clientX;
                const percentage = (delta / maxDelta) * -100;
                const next = Math.max(Math.min(parseFloat(prevPercentage) + percentage, 0), -100);
                setNextPercentage(next);
                track.current.animate(
                    { transform: `translate(${next}%, 0%)` },
                    { duration: 1200, fill: "forwards" }
                );
                for (const image of document.getElementById("image-track").getElementsByClassName("image")) {
                    image.animate(
                        { objectPosition: `${100 + next}% 50%` },
                        { duration: 1200, fill: "forwards" }
                    );
                }
            };
        }
    });

    return (
        <>
            <div className="contain">
                <div ref={track} id="image-track">
                    <img className="image hidden" draggable="false" src={plcDashboard} alt="PLC Dashboard" />
                    <h2>PLC Dashboard</h2>
                    <img className="image hidden" draggable="false" src={plcHistory} alt="PLC History" />
                    <h2>PLC History</h2>
                    <img className="image hidden" draggable="false" src={accuguide} alt="Accuguide" />
                    <h2>Accuguide</h2>
                    <img className="image hidden" draggable="false" src={sharkord} alt="Sharkord" />
                    <h2>Sharkord</h2>
                </div>
            </div>
        </>
    );
}

export default Content;