import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>      <div className="row">
      <div className="row">
          <div className="col-6">
          <img
                src="images/ENT_Logo.jpg"
                alt="Dr Rahul Patil"
                width={450}
                height={130}
              ></img>
          </div>
          <div className="col text-align:right"><a href="tel:+91098676 55815"><i class="fa fa-phone fa-2x text-warning" aria-hidden="true"> 098676 55815</i></a> </div>
          <div className="col"><a href="mailto: rahul.patil@gmail.com"><i class="fa fa-envelope fa-2x text-warning" aria-hidden="true"> rahul.patil@gmail.com</i> </a></div>
        </div>
          <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">
                Home
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse ml-auto"
                id="navbarNavDropdown"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item text-justify-content">
                    <NavLink className="nav-link" to="/update">
                      Updates
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/testmonial">
                      Testimonials
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/gallery">
                      Gallery
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  {/* <li class="nav-item dropdown" hide>
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      
    </>
  );
};
export default Navbar;
