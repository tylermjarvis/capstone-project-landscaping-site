import LogoImage from "../assets/Landshapez_Logo.png";
import "../App.css";
import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

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
                <HashLink
                  className="nav-link active"
                  to="/"
                  onClick={scrollToTop}
                >
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                {/* <HashLink className="nav-link" to="#about"> */}
                <Link className="nav-link" to="#about">
                  About
                </Link>
                {/* </HashLink> */}
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="#gardening">
                  Gardening
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="#paving-tiling">
                  Paving/Tiling
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="#retaining">
                  Retaining
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="#fencing">
                  Fencing
                </HashLink>
              </li>
              <li className="nav-item">
                {/* <HashLink
                  className="nav-link"
                  to="/portfolio"
                  onClick={scrollToTop}
                > */}
                <a className="nav-link" href="/portfolio">
                  Portfolio
                </a>
                {/* </HashLink> */}
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="#contact">
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
