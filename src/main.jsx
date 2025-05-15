import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./style.css";
import "./utils.css";
import "./header.css";
import "./hero.css"
import "./activities.css"
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Activities from "./Activities.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Header/>
        <Hero/>
        <Activities/>
    </StrictMode>
)

/* Project Started May 13th, 2025 */
