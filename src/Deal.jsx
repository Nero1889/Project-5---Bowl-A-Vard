import bowlingRack from "./assets/bowlingRack.png"

function Deal() {
    return (
        <div className="deal section">
            <div id="bottomless-bowling">
                <h1 id="bottomless-title">Bottomless Bowling <br/>Just $9.99!</h1>
                <br/>
                <img id="bowling-rack" src={bowlingRack} alt="Bowling Rack"/><br/>
                <p className="bottomless-desc"><strong>Monday - Thursday | 8PM - Close |
                Rental Shoes Included</strong></p><br/>
                <p className="bottomless-desc">Come in Monday through Thursday from 8PM
                to close and <strong>enjoy unlimited bowling for just $9.99 per person —
                and yes, that includes rental shoes!</strong></p><br/>
                <p className="bottomless-desc">Whether you're looking for a good practice
                session or just hanging out, it's the perfect way to cap off your night
                with friends, family, or coworkers</p><br/>
                <p className="bottomless-desc">Walk-ins only. No reservations required. 
                Non-transferable.</p>
                <a href="bowling.html"> 
                    <button className="btn-border">View Bowling Deals</button>
                </a>
            </div>
        </div>
    )
}

export default Deal;