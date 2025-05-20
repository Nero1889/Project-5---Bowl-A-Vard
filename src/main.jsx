import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./style.css";
import "./utils.css";
import "./header.css";
import "./hero.css";
import "./deal.css";
import "./team.css";
import "./activities.css";
import "./location.css";
import "./footer.css";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Deal from "./Deal.jsx";
import Team from "./Team.jsx";
import Activities from "./Activities.jsx";
import Location from "./Location.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Header/>
        <Hero/>
        <Deal/>
        <Team/>
        <Activities/>
        <Location/>
        <Footer/>
    </StrictMode>
)

/* Project Started: May 13th, 2025 */
