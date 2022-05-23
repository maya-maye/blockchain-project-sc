import React, { useState, useEffect } from "react";
import "./App.css";
import "./Pages/Login/Login.js"

function deductAmount({amount}){
    if(!window.ethereum){
        <h3 className="error"> Not connected to MetaMask. Please first log in!</h3>
        alert("Not connected to MetaMask. Please first log in!");
    }
    if(amount < 0.01 || amount > 100){
        alert("Please input a valid amount!");
    }
}

function Question(props){
    const [amount, setAmount] = useState(' ');
   
    return(
        <div className="home">
            <h3 className = "questionheader">Welcome!</h3>
            <h3 className = "questionheader">Question of the Day:</h3>
            <h2 className = "questionitself">{props.q}</h2> 
            <div className = "bettingamount">
              <input type="text" pattern = "^(?:(?![0.]+$|99)|(?=(?:99|99\.0+)$))\d{1,2}(?:\.\d+)?$" placeholder="Betting Amount" /*value={amount} onChange={(e)=>setAmount(e.target.value)}*//>
              <span className = "error">Please input a valid amount (0.01 - 100).</span>
            </div>
            <button onclick={deductAmount} className = "chooseButton yes">YES!</button>
            <button onclick={deductAmount} className = "chooseButton no">NO!</button>
        </div>
    );
}

export default Question;
