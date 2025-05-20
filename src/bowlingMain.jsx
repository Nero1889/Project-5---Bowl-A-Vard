import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./style.css";
import "./utils.css";
/* =========== Start of Main.jsx =========== */
import "./header.css";
import "./hero.css";
import "./footer.css";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Footer from "./Footer.jsx";
/* =========== End of Main.jsx =========== */
import "./openBowling.jsx";
import OpenBowling from "./openBowling.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Header/>
        <Hero/>
        <OpenBowling/>
        <Footer/>
    </StrictMode>
)

/* Project Started: May 13th, 2025 */