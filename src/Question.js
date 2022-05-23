import React from "react";
import "./App.css";

function Question(props){
    return(
        <div className="home">
            <h3 className = "questionheader">Welcome!</h3>
            <h3 className = "questionheader">Question of the Day:</h3>
            <h2 className = "questionitself">{props.q}</h2> 
            <input className = "bettingamount" type="text" placeholder="Betting Amount: 0.01 - 100" />
            <button className = "chooseButton yes">YES!</button>
            <button className = "chooseButton no">NO!</button>
        </div>
    );
}

export default Question;
