
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Routes,Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Update from "./components/Update";
import Testimonial from "./components/Testimonial";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer"


const App=()=>{
return(
  <>
  
<NavbarComponent/>
<Routes >
    <Route   path="/" element={<Home />} /> 
    <Route   path="/about"  element={<About/>} />
    <Route   path="/update"  element={<Update />} />
    <Route   path="/testmonial"  element={<Testimonial/>}/> 
    <Route   path="/gallery"  element={<Gallery/>}/> 
    <Route   path="/contact"  element={<Contact/>} />
    
  </Routes>

<Footer/>
  
  </>
);
}

export default App;
