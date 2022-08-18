import wsp from "../images/icons/icono-wsp.png";
import facebook from "../images/icons/icono-facebook.png";
import instagram from "../images/icons/icono-instagram.png";
import logo from "../images/logo.png";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <header>
      <div className="headerContainer">
        <div className="headerLeft"></div>
        <div className="headerLogo">
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <nav className="headerNav">
          <ul className="headerNavBar">
            <li className="navbarElementos underline-hover">
              <Link to="/" className="link">
                NOSOTROS
              </Link>
            </li>
            <li
              className="navbarElementos underline-hover"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to="/artistas" className="link">
                ARTISTAS
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="navbarElementos underline-hover">
              <Link to="/" className="link">
                CALENDARIO
              </Link>
            </li>
            <li className="navbarElementosContacto underline-hover">
              <Link to="/" className="link">
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>
        <div className="headerRedes">
          <ul>
            <li>
              <img className="iconos" src={wsp} alt="" />
            </li>
            <li>
              <img className="iconos" src={facebook} alt="" />
            </li>
            <li>
              <img className="iconosInstagram" src={instagram} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
