import React, { useEffect, useState, useCallback } from "react";
import "./index.css";
import icon from "../../images/icon.png"

const Navbar = () => {
    const [textTransform, setTextTransform] = useState();
    const [backgroundColor, setBackgroundColor] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('logs.theme'));
    const [svh, setSvh] = useState(theme==='light'?
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/>
    </svg>:
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
    </svg>);
    const root = document.querySelector(':root');
    root.setAttribute('color-scheme', theme);

    function transformStart() {
        setTextTransform(-100);
    };
    function transformStop() {
        setTextTransform(0);
    };
    useEffect(() => {
        setTimeout(transformStart, 10000);
        setTimeout(transformStop, 14000);
    }, [textTransform]);
    useEffect(()=>{
        localStorage.setItem('logs.theme', theme);
        setTheme(localStorage.getItem('logs.theme'));
    },[backgroundColor])
    const colorMode = useCallback(() => {
        setBackgroundColor(prev => !prev);
        setTheme(backgroundColor ? 'dark' : 'light');
        setSvh(
            backgroundColor?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/>
            </svg>
        )
        root.setAttribute('color-scheme', theme);
        localStorage.setItem('logs.theme', theme);
    }, [backgroundColor])
    return (
        <div className="navbar-div">
            <div className="icon">
                <img src={icon} alt="" />
            </div>
            <div className="nav-wrap">
                <p className="p-name" style={{ transform: `translate(${textTransform}%,0%)` }}>ORJINAMEH</p>
                <div onClick={()=>colorMode()} className="sv">
                    {svh}
                </div>
            </div>
        </div>
    );
}

export default Navbar;