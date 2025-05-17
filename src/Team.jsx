function Team() {
    return (
        <div className="team">
            <div id="join-team">
                <h1 id="team-title">Join Our Team!</h1>
                <button className="btn-border"
                onClick={() => alert("Welcome to the team!")}
                >Apply Now</button>
            </div>
        </div>
    )
}

export default Team;