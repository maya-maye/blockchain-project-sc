import react from "react"

const About = () => {
    return (
        <div>
            <h1 className = "questionheader">Rules for the Game!</h1>
            <ul>
                <li>   Everyday a new yes/no question will appear on the home page</li>
                <li>   You can vote once per day, through your account, inputting an amount to bet as well</li>
                <li>   Whichever side gets the minority number of votes. If you win, you get your earnings doubled!</li>
            </ul>
        </div>
    )
}

export default About