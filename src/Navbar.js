import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function Navbar() {

    const [show ,setshow]=useState()

  return (
    <>
      <div className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a class="navbar-brand" href="Navebar">
              Navbar
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={()=>{setshow(!show)}}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show":""}`} >
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/services">
                    Services
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/contacts">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn btn-style" type="submit">
                  Sign up
                </button>
                <button class="btn btn-style btn-style-border" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
