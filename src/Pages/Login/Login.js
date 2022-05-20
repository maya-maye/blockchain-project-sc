

// import { useState } from 'react';
import Google from "../Login/img/google.png"
import Facebook from "../Login/img/facebook.png"
// import Github from "../Login/img/github.png"
import Metamask from "../Login/img/metamask.png"
import React, { useEffect, useState } from "react";


async function checkIfWalletIsConnected(onConnected) {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      const account = accounts[0];
      onConnected(account);
      return;
    }
  }
}

async function connect(onConnected) {
  if (!window.ethereum) {
    alert("Get MetaMask!");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  onConnected(accounts[0]);
}



function Connect({ setUserAddress }) {
  return (
    <div className="login">
    <h1 className="loginTitle">Choose a Login Method</h1>
    <div className="wrapper">
      <div className="left">
        <div className="loginButton google">
          <img src={Google} alt="" className="icon" />
          Google
        </div>
        <div className="loginButton facebook">
          <img src={Facebook} alt="" className="icon" />
          Facebook
        </div>
        {/*<div className="loginButton github">
          <img src={Metamask} alt="" className="icon" />
          Metamask
          <button className={styles.button} onClick={() => connect(setUserAddress)}>
            Connect to MetaMask
         </button>

        </div>
  */}
        <button className= "loginButton github" onClick={() => connect(setUserAddress)}>
          <img src={Metamask} alt="" className="icon" />
          Metamask

        </button>
      </div>
      <div className="center">
        <div className="line" />
        <div className="or">OR</div>
      </div>
      <div className="right">
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />
        <button className="submit">Login</button>
      </div>
    </div>
  </div>
  );
}


function Address({ userAddress }) {
  return (
    <span className="address">{userAddress.substring(0, 5)}…{userAddress.substring(userAddress.length - 4)}</span>
  );
}


export default function Login() {
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress);
  }, []);

  /*useEffect(() => {
    onAddressChanged(userAddress);
  }, [userAddress]);
  */

  return userAddress ? (
    <div className="loginSuceessful">
    Successfully connected with <Address userAddress={userAddress} />
  </div>
  
  ) : (
     <Connect setUserAddress={setUserAddress}/>
  );
}




