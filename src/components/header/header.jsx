import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../../logos/Logos-Hussel-Kay.png";

function Header() {
  const [menu, setMenu] = useState(true);
  const navRef = useRef(null);

  const openMenu = () => {
    setMenu(!menu ? true : false);
  };

  const closeMenu = () => {
    if (window.innerWidth <= 700) {
      setMenu(false);
    }
  };

  useEffect(() => {
    setMenu(window.innerWidth > 700);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menu &&
        window.innerWidth <= 700 &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menu]);

  return (
    <header className="header" ref={navRef}>
      <div className="container">
        <Link to="/" className="logo" onClick={() => closeMenu()}>
          <img src={Logo} alt="Logo" />
        </Link>

        <div className="boton" onClick={openMenu}>
          <label htmlFor="btn-menu">Menu</label>
        </div>

        <input type="checkbox" id="btn-menu" />

        {menu && (
          <nav className="menu">
            <Link to="/" className="rutasNav" onClick={() => closeMenu()}>
              Home
            </Link>
            <Link
              to="/services"
              className="rutasNav"
              onClick={() => closeMenu()}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="rutasNav"
              onClick={() => closeMenu()}
            >
              Contact
            </Link>
            <Link to="/team" className="rutasNav" onClick={() => closeMenu()}>
              Team
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
