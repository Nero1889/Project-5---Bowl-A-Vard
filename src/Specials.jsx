import strike from "./assets/strike.png";

function Specials() {
    return (
        <div className="specials">
            <img id="strike" src={strike} alt="Strike"/>
            <h1 id="specials-title">SPECIALS</h1>
            <h3 id="specials-subtitle">PIZZA, PINS & POP SPECIAL</h3>
            <p id="specials-desc">2 hours of bowling, 1 single topping pizza, 2 pitchers
            of soda, and shoe rental for up to 6 people. Tax and Service Charge not 
            included. Online Reservations Only.</p>
        </div>
    )
}

export default Specials;