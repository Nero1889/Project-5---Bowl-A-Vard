function Location() {
    return (
        <div className="location">
            <h1 id="location-title">Our Location</h1>
            <div id="a">
                <div id="b">
                    <h2 className="loc-title">Bowl-A-Vard</h2>
                    <p>2121 E Springs Dr.</p>
                    <p>Madison, WI 53704</p>
                </div>
                <div id="c">
                    <h2 className="loc-title">Hours</h2>
                    <p>Monday - Thursday: 10:00 am - 11:00 pm</p>
                    <p>Friday: 10:00 am - 1:00 am</p>
                    <p>Saturday: 11:00 am - 1:00 am</p>
                    <p>Sunday: 12:00 pm - 11:00 pm</p>
                    <p>Memorial Day: 9:00 am - 11:00 pm</p>
                </div>
            </div>
            <iframe
                id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.783919988886!2d-89.3153175!3d43.0948999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8839e5910ff579f3%3A0x9df4c75c5859a87!2s2121+E+Springs+Dr%2C+Madison%2C+WI+53704!5e0!3m2!1sen!2sus!4v1715912145878!5m2!1sen!2sus"
            ></iframe>        
        </div>
    )
}

export default Location;
