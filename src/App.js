import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Post from "./Pages/Post";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home";
import Create from "./Pages/Create/Create";
import About from "./Pages/About"
import {BrowserRouter, Routes, Route, Navigate, Link} from "react-router-dom"
import Question from "./Question"

function App() {
  return (
    // const user = true;
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={user ? <Login /> : <Login />} />
        <Route path="/post/:id" element={user ? <Post />: <Navigate to="/login" />} /> */}
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />

      </Routes>
      {/* <Question q = "Is a hotdog a sandwich?"/> */}
    </div>
    </BrowserRouter>
    

  );
};

export default App;
