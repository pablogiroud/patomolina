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
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/">Principal</NavLink>
              </li>
              <li>
                <NavLink to="/about">Bio</NavLink>
              </li>
              <li>
                <NavLink to="/nextShows">Proximas fechas</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contacto</NavLink>
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
