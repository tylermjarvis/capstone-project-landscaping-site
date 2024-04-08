import LogoImage from "../assets/Landshapez_Logo.png";
import "../App.css";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      <nav className={`navbar navbar-expand-xl ${isSticky ? "sticky" : ""}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={LogoImage}
              className="logo"
              alt="Landshapez logo"
              width="150"
              height="20"
            />
          </a>
          <button
            className="navbar-toggler collapsed d-flex d-xl-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav nav-list">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gardening">
                  Gardening
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#paving-tiling">
                  Paving/Tiling
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#retaining">
                  Retaining
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#fencing">
                  Fencing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
