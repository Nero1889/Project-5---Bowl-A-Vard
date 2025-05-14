import React, {useState, useEffect} from "react";
import sun from "./assets/slate-sun.png";
import menubar from "./assets/menu.png";
import logo from "./assets/bowl-a-vardLogo.png";

function Header() {
    const [LIGHT_MODE, SET_LIGHT_MODE] = useState(() => {
        return localStorage.getItem("theme") === "light";
    });

    useEffect(() => {
        if (LIGHT_MODE) {
            document.body.classList.add("light-mode");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.remove("light-mode");
            localStorage.removeItem("theme");
        }

        document.body.style.transition = "background-color .2s ease-in-out";
    }, [LIGHT_MODE]); 

    const TOGGLE_THEME = () => {
        SET_LIGHT_MODE(!LIGHT_MODE);
    };

    const TITLE = {
        fontSize: "4rem",
        color: "#b71234",
        fontFamily: "Montserrat",
        letterSpacing: "-.005rem",
    }

    return (
        <header className="header container">
            <img id="logo" src={logo} alt="Bowl-A-Vard Logo"/>
            <nav>
                <ul className="header-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#bowling">Bowling</a></li>
                    <li><a href="#arcade">Arcade</a></li>
                    <li><a href="#food">Food</a></li>
                    <li id="header-line"></li>
                    <li onClick={TOGGLE_THEME}>
                        <img className="sun" src={sun} alt="Sun Icon" draggable="false"/>
                    </li>
                </ul>
                <img onClick={() => alert("You opened the menu!")} className="menu-bar"
                src={menubar} alt="Menu Icon"/>
            </nav>
        </header>
    );
}

export default Header;
