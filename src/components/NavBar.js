import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ReactComponent as Hamburger } from "../assets/icons/hamburguer.svg";
import logo from "../../src/styles/images/logo.png";
import "../styles/styles.css";
import "../styles/navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img alt="Pato's Logo" src={logo} />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/nextShows">Next Shows</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
