import React, { useState, useEffect, useRef } from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../logos/Logos-Hussel-Kay.png";

function Header() {
  const [menu, setMenu] = useState(true);
  const navRef = useRef(null);

  const openMenu = () => {
    setMenu(!menu ? true : false);
  };

  const closeMenu = () => {
    window.scroll(0, 0);
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
    <header className={styles.header} ref={navRef}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={() => closeMenu()}>
          <img src={Logo} alt="Logo" />
        </Link>

        <div className={styles.boton} onClick={openMenu}>
          <label htmlFor="btn-menu">Menu</label>
        </div>

        {menu && (
          <nav className={styles.menu}>
            <Link
              to="/"
              className={styles.rutasNav}
              onClick={() => closeMenu()}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={styles.rutasNav}
              onClick={() => closeMenu()}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={styles.rutasNav}
              onClick={() => closeMenu()}
            >
              Contact
            </Link>
            <Link
              to="/team"
              className={styles.rutasNav}
              onClick={() => closeMenu()}
            >
              Team
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
