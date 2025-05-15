import menubar from "./assets/menu.png";
import logo from "./assets/bowl-a-vardLogo.png";

function Header() {
    return (
        <header className="header container">
            <img id="logo" src={logo} alt="Bowl-A-Vard Logo"/>
            <nav>
                <ul className="header-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#bowling">Bowling</a></li>
                    <li><a href="#arcade">Arcade</a></li>
                    <li><a href="#food">Food</a></li>
                </ul>
                <img onClick={() => alert("You opened the menu!")} className="menu-bar"
                src={menubar} alt="Menu Icon"/>
            </nav>
        </header>
    );
}

export default Header;
