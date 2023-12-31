import './App.css';
import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import Cart from "./Cart";
import { Route, Routes } from "react-router-dom";
export default function App()
{
  return<>
    <div className="container-fluid">
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
        
    </>
}