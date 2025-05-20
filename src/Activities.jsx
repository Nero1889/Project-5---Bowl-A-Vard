import React, { useEffect, useRef } from "react";
import bowling from "./assets/bowling.png";
import arcade from "./assets/arcade.png";
import mic from "./assets/events.png";

function Activities() {
    const BOWLING_WRAPPER_REF = useRef(null);
    const ARCADE_WRAPPER_REF = useRef(null);
    const EVENTS_WRAPPER_REF = useRef(null);

    const BOWLING_BOX_REF = useRef(null);
    const ARCADE_BOX_REF = useRef(null);
    const EVENTS_BOX_REF = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const moveBox = (wrapper, box, direction = 1, speed = 0.4) => {
                if (!wrapper || !box) return;

                const RECT = wrapper.getBoundingClientRect();
                const CENTER = window.innerHeight / 2;
                const DIST_FROM_CENTER = RECT.top + RECT.height / 2 - CENTER;

                const MAX_SLIDE = 100;
                const X_OFF_SET = direction * Math.max(-MAX_SLIDE, Math.min(MAX_SLIDE, -DIST_FROM_CENTER * speed));

                box.style.transform = `translateX(calc(-50% + ${X_OFF_SET}px))`;
            };

            requestAnimationFrame(() => {
                moveBox(BOWLING_WRAPPER_REF.current, BOWLING_BOX_REF.current, -1, 0.4);
                moveBox(ARCADE_WRAPPER_REF.current, ARCADE_BOX_REF.current, 1, 0.4);
                moveBox(EVENTS_WRAPPER_REF.current, EVENTS_BOX_REF.current, -1, 0.3); 
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); 
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="activities section">
            <h1 id="activities-title">Activities</h1>
            <p id="activ-desc">We have everything from our <strong>classic bowling, 
            </strong> to our <strong>arcade</strong> packed with thrilling games, as well
            as <strong>local events!</strong></p>
            <div className="activ-wrapper" ref={BOWLING_WRAPPER_REF}>
                <div className="activ-box" ref={BOWLING_BOX_REF}></div>
                <div className="activ-container">
                    <img className="activ-img" src={bowling} alt="Bowling Pins"/>
                    <a className="btn-border" href="bowling.html">Bowling</a>
                </div>
            </div>
            <div className="activ-wrapper" ref={ARCADE_WRAPPER_REF}>
                <div className="activ-box" ref={ARCADE_BOX_REF}></div>
                <div className="activ-container">
                    <img className="activ-img" src={arcade} alt="Arcade Machine"/>
                    <a className="btn-border" href="arcade.html">Arcade</a>
                </div>
            </div>
            <div className="activ-wrapper" ref={EVENTS_WRAPPER_REF}>
                <div className="activ-box" ref={EVENTS_BOX_REF}></div>
                <div className="activ-container">
                    <img className="activ-img" src={mic} alt="Microphone"/>
                    <button className="btn-border">Events</button>
                </div>
            </div>
        </div>
    );
}

export default Activities;
