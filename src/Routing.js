import React from 'react'
import {  Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import Protectedroute from './Components/Protectedroute';

function Routing() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
      <Protectedroute><Home/></Protectedroute>
      }/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing