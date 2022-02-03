import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddInventory from "./components/AddInventory";
function App() {
  return (
    <>
     <header className="App-header"> 

       <h1> Products Inventory Management</h1>
      <Navbar />

      <Routes>
        
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/AddInventory" element={<AddInventory />} />
      </Routes>

      </header>

    </>
  );
}

export default App;
