import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Post from "./Pages/Post";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home";
import Create from "./Pages/Create/Create";
import {BrowserRouter, Routes, Route, Navigate, Link} from "react-router-dom"

function App() {
  const user = true
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Login /> : <Login />} />
        <Route path="/post/:id" element={user ? <Post />: <Navigate to="/login" />} />
        <Route path="/create" element={<Create />} />

      </Routes>
     
    </div>
    </BrowserRouter>
  );
};

export default App;
