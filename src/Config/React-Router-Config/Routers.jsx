import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../Screens/Home/Home';
import Nav from '../../Components/Navebar/Nav';
import About from '../../Screens/About/About';
import Contect from '../../Screens/Contect/Contect';
import Project from '../../Screens/Projects/Project';
import Dashboard from '../../Screens/Adim/Admin'
const Routers = () => {
    return (
        <>
          
        <BrowserRouter>
  <Nav/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="About" element={<About/>} />
            <Route path="Contect" element={<Contect/>} />
            <Route path="Projects" element={<Project/>} />
            <Route path="admin" element={<Dashboard/>} />
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default Routers