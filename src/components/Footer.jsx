import React from "react";
import { NavLink } from "react-router-dom";
const Footer=()=>{
return(
<footer className="mainfooter " role="contentinfo" fixd="bottom">
  <div className="footer-middle">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
     
        <div className="footer-pad">
          <h4>Contact</h4>
          <ul className="list-unstyled">
            <li>098676 55815</li>
           
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
       
        <div class="footer-pad">
          <h4>Address</h4>
          <ul class="list-unstyled">
            <li><p>113,1st Floor, Above Pizza Hut & Kotak Bank, Latiff Park, SK Stone
Highway, Mira Bhayandar Road
Maharashtra 401107
India</p></li>
            
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
      
        <div class="footer-pad">
          <h4>Menu</h4>
          <ul class="list-unstyled">
          <li> <NavLink className="nav-link_c" to="/update">Updates</NavLink></li>
            <li> <NavLink className="nav-link_c" to="/testmonial">Testmonial</NavLink></li>
            <li> <NavLink className="nav-link_c" to="/gallery">Gallery</NavLink></li>
            <li><NavLink className="nav-link_c" to="/contact">Contact</NavLink></li>
            <li><NavLink className="nav-link_c" to="/about">About</NavLink></li>
          </ul>
        </div>
      </div>
    	<div className="col-md-3">
    		<h4>Follow Us</h4>
            <ul className="social-network social-circle">
             <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
             <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
             
            </ul>				
		</div>
    </div>
	<div class="row">
		<div className="col-md-12 copy">
			<p className="text-center">&copy; Copyright 2022 - SKY.  All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>

);

}


export default Footer;


