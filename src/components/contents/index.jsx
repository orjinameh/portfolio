import React, { useCallback, useLayoutEffect, useState } from "react";
import "./index.css";
const Content = ({carouselArray}) => {
    const [slidePosition, setSlidePosition] = useState(1);
    const [display, setDisplay] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const SlideshowRight=useCallback(() =>{
        if(screenWidth>767){
            if(slidePosition===1){setDisplay(prev=>prev+20);setSlidePosition(2)};
            if(slidePosition===2){setDisplay(prev=>prev+20);setSlidePosition(3)};
            if(slidePosition===3){setDisplay(prev=>prev+20);setSlidePosition(4)};
            if(slidePosition===4){setDisplay(prev=>prev+20);setSlidePosition(5)};
            if(slidePosition===5){setDisplay(prev=>prev+20);setSlidePosition(6)};
            if(slidePosition===6){setDisplay(prev=>prev+20);setSlidePosition(7)};
            if(slidePosition===7){setDisplay(0); setSlidePosition(1)};
        }
        if(screenWidth<=767){
            if(slidePosition===1){setDisplay(prev=>prev+60);setSlidePosition(2)};
            if(slidePosition===2){setDisplay(prev=>prev+60);setSlidePosition(3)};
            if(slidePosition===3){setDisplay(prev=>prev+60);setSlidePosition(4)};
            if(slidePosition===4){setDisplay(prev=>prev+60);setSlidePosition(5)};
            if(slidePosition===5){setDisplay(prev=>prev+60);setSlidePosition(6)};
            if(slidePosition===6){setDisplay(prev=>prev+60);setSlidePosition(7)};
            if(slidePosition===7){setDisplay(0); setSlidePosition(1)};
        }
    },[slidePosition])
    const SlideshowLeft=useCallback(() =>{
        if (screenWidth>767){
            if(slidePosition===1){setDisplay(0);setSlidePosition(1)};
            if(slidePosition===2){setDisplay(prev=>prev-20);setSlidePosition(1)};
            if(slidePosition===3){setDisplay(prev=>prev-20);setSlidePosition(2)};
            if(slidePosition===4){setDisplay(prev=>prev-20);setSlidePosition(3)};
            if(slidePosition===5){setDisplay(prev=>prev-20);setSlidePosition(4)};
            if(slidePosition===6){setDisplay(prev=>prev-20);setSlidePosition(5)};
            if(slidePosition===7){setDisplay(prev=>prev-20); setSlidePosition(6)};
        }
        if (screenWidth<=767){
            if(slidePosition===1){setDisplay(0);setSlidePosition(1)};
            if(slidePosition===2){setDisplay(prev=>prev-60);setSlidePosition(1)};
            if(slidePosition===3){setDisplay(prev=>prev-60);setSlidePosition(2)};
            if(slidePosition===4){setDisplay(prev=>prev-60);setSlidePosition(3)};
            if(slidePosition===5){setDisplay(prev=>prev-60);setSlidePosition(4)};
            if(slidePosition===6){setDisplay(prev=>prev-60);setSlidePosition(5)};
            if(slidePosition===7){setDisplay(prev=>prev-60); setSlidePosition(6)};
        }
    },[slidePosition])
    useLayoutEffect(()=>{
        const handleResize = () =>{
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return()=>{
            window.removeEventListener('resize', handleResize);
        };
    },[screenWidth]);
    return (
        <>
            <div className="contain">
                    <div className="list">
                        {carouselArray.map((carouselItem)=>
                            <div key={carouselItem.id} className="carousel" >
                                <img src={carouselItem.image} alt="" style={{right:`${display}vw`}}/>
                            </div>
                        )}
                    </div>
                <div className="svg-container">
                    <div className="right-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={SlideshowLeft} className="arrow-left" fill="#deb887" viewBox="0 0 448 512">
                            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                        </svg>
                    </div>
                    <div className="left-btn">
                        <svg className="arrow-righten" onClick={SlideshowRight} xmlns="http://www.w3.org/2000/svg" fill="#deb887" viewBox="0 0 448 512">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                        </svg>
                    </div>
                </div>
                <div className="carousel-background1"></div>
                <div className="carousel-background2"></div>
            </div>
        </>
    );
}
 
export default Content;