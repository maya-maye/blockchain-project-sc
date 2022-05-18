import React from "react";
import "./App.css";

function Question(props){
    return(
        <div className="home">
            <h1 className = "questionheader">Welcome!</h1>
            <h3 className = "questionheader">Question of the Day:</h3>
            <p className = "questionitself">{props.q}</p> 
            <input className = "bettingamount" type="text" placeholder="Betting Amount" />
            <button className = "loginButton google">yes</button>
            <button className = "loginButton facebook">no</button>
        </div>
    );
}

export default Question;
