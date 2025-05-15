import React, {useState, useRef, useEffect} from "react";
import ball from "./assets/bowlingBall.png";
import pins from "./assets/bowlingPins.png";
import "./Hero.css"; 

function Hero() {
    const gridRef = useRef(null);
    const pinsRef = useRef(null);
    const ballRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
    const [isHoveringGrid, setIsHoveringGrid] = useState(false);
    const gridCenter = useRef({x: 0, y: 0});

    useEffect(() => {
        const calculateGridCenter = () => {
            if (gridRef.current) {
                const rect = gridRef.current.getBoundingClientRect();
                gridCenter.current = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,      
                };
            }
        };

        calculateGridCenter();
        window.addEventListener("resize", calculateGridCenter);

        return () => {
            window.removeEventListener("resize", calculateGridCenter);
        };
    }, []);

    const handleMouseMove = (e) => {
        setMousePosition({x: e.clientX, y: e.clientY });
    };

    const handleMouseEnterGrid = () => setIsHoveringGrid(true);
    const handleMouseLeaveGrid = () => setIsHoveringGrid(false);

    useEffect(() => {
        let animationFrameId;

        const updateTransforms = () => {
            if (!pinsRef.current || !ballRef.current) return;

            const deltaX = mousePosition.x - gridCenter.current.x;
            const deltaY = mousePosition.y - gridCenter.current.y;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const interactionRadius = 350;

            if (distance < interactionRadius) {
                const normalizedDistance = distance / interactionRadius;
                const easing = 1 - normalizedDistance; 

                const ballPullFactor = 1;
                const pinsPullFactor = .2;

                const ballTranslateX = deltaX * ballPullFactor * easing;
                const ballTranslateY = deltaY * ballPullFactor * easing;
                const pinsTranslateX = deltaX * pinsPullFactor * easing;
                const pinsTranslateY = deltaY * pinsPullFactor * easing;

                ballRef.current.style.transform = `translate(${ballTranslateX}px, ${ballTranslateY}px)`;
                pinsRef.current.style.transform = `translate(${pinsTranslateX}px, ${pinsTranslateY}px)`;
            } else {
                ballRef.current.style.transform = "translate(0, 0)";
                pinsRef.current.style.transform = "translate(0, 0)";
            }
            animationFrameId = requestAnimationFrame(updateTransforms);
        };
        animationFrameId = requestAnimationFrame(updateTransforms);

        return () => cancelAnimationFrame(animationFrameId);
    }, [mousePosition, isHoveringGrid]);

    return (
        <div className="hero" onMouseMove={handleMouseMove}>
            <div id="hero-container">
                <img id="pins" ref={pinsRef} src={pins} alt="Bowling Pins"
                draggable={false}/>
                <img id="ball" ref={ballRef} src={ball} alt="Bowling Ball" 
                draggable={false}/>
                <div className="grid-container"
                    ref={gridRef}
                    onMouseEnter={handleMouseEnterGrid}
                    onMouseLeave={handleMouseLeaveGrid}
                >
                {Array.from({length: 25}).map((_, i) => (
                    <div key={i} className="grid-item"></div>
                ))}
                </div>
                <h1 id="hero-title">Bowl-A-Vard</h1>
            </div>
            <div id="hero-desc-container">
                <h2 id="hero-sub-title">40 State of the Art Lanes</h2>
                <p id="desc">We've got everything you need for <strong>year-round fun at
                a price you can afford.</strong> If you want to stretch your 
                entertainment dollars as far as possible, and still have a great time in
                Madison, <strong>Bowl-A-Vard is the place.</strong></p>
                <button className="btn-border">Contact us</button>
            </div>
        </div>
    );
}

export default Hero;
