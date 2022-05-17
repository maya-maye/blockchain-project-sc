// import GoogleLogin from 'react-google-login';
// import { useState } from 'react';

// const Login = () => {
//     const [loginData, setLoginData] = useState(
//         localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')) : null
//     );

//     const handleFailure = (result) => {
//         alert(result);
//     };
//     const handleLogin = async (googleData) => {
//         const res = await fetch('/api/google-login', {
//             method: 'POST',
//             body: JSON.stringify({
//                 token: googleData.tokenID,
//             }),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         const data = await res.json();
//         setLoginData(data);
//         localStorage.setItem('loginData', JSON.stringify(data));
//     };
//     const handleLogout = () => {
//         localStorage.removeItem('loginData');
//         setLoginData(null);
//     }
//     return (
//         <div>
//             <h1 className="loginTitle">Choose a Login Method</h1>
//             <div className="wrapper">
//                 {
//                     loginData ? (
//                         <div>
//                             <h3>You logged in as {loginData.email}</h3>
//                             <button onClick={handleLogout}>Logout</button>
//                         </div>
//                     ) : (
//                     <GoogleLogin
//                         clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//                         buttonText="Log in with Google"
//                         onSuccess={handleLogin}
//                         onFailure={handleFailure}
//                         cookiePolicy={'single_host_origin'}
//                     >
//                     </GoogleLogin>
//                     )
//                 }
 

//             </div>
//         </div>
//     )
// }

// export default Login
import { useState } from 'react';
import Google from "../Login/img/google.png"
import Facebook from "../Login/img/facebook.png"
import Github from "../Login/img/github.png"
import "./login.css"

const Login = () => {
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
          <div className="loginButton github">
            <img src={Github} alt="" className="icon" />
            Github
          </div>
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
  )
}

export default Login

