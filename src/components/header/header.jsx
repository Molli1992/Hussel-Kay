import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/Logos-Hussel-Kay.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { handleOpenLink } from "../../utils/utils";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef(null);

  const goHome = () => {
    navigate("/");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleCloseMenu();
      }
    }

    if (menu && !isClosing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu, isClosing]);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMenu(false);
      setIsClosing(false);
    }, 500);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.logoContainer}`}>
        <img src={Logo} alt="Logo" className={styles.logo} onClick={goHome} />
      </div>

      <nav className={styles.container}>
        <ul className={styles.list}>
          <Link
            to="/"
            className={styles.link}
            style={{ color: location.pathname === "/" ? "#f57c48" : "" }}
          >
            Home
          </Link>

          <Link
            to="/services"
            className={styles.link}
            style={{
              color: location.pathname === "/services" ? "#f57c48" : "",
            }}
          >
            Services
          </Link>

          <Link
            to="/team"
            className={styles.link}
            style={{ color: location.pathname === "/team" ? "#f57c48" : "" }}
          >
            Team
          </Link>

          <Link
            to="/contact"
            className={styles.buttonLink}
            style={{
              backgroundColor:
                location.pathname === "/contact" ? "#f57c48" : "",
            }}
          >
            Contact
          </Link>
        </ul>

        <div className={styles.iconContainer}>
          <button className={styles.button} onClick={() => setMenu(true)}>
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {menu && (
        <div
          className={`${styles.menu} ${isClosing ? styles.hide : styles.show}`}
          ref={menuRef}
        >
          <div className={styles.menuContainer}>
            <img
              src={Logo}
              alt="Logo"
              className={styles.logo}
              onClick={() => {
                goHome();
                handleCloseMenu();
              }}
            />

            <div>
              <button className={styles.button} onClick={handleCloseMenu}>
                <IoCloseSharp />
              </button>
            </div>
          </div>

          <ul className={styles.menuList}>
            <Link
              to="/"
              className={styles.link}
              style={{ color: location.pathname === "/" ? "#f57c48" : "" }}
              onClick={handleCloseMenu}
            >
              Home
            </Link>

            <Link
              to="/services"
              className={styles.link}
              style={{
                color: location.pathname === "/services" ? "#f57c48" : "",
              }}
              onClick={handleCloseMenu}
            >
              Services
            </Link>

            <Link
              to="/team"
              className={styles.link}
              style={{ color: location.pathname === "/team" ? "#f57c48" : "" }}
              onClick={handleCloseMenu}
            >
              Team
            </Link>

            <Link
              to="/contact"
              className={styles.link}
              style={{
                color: location.pathname === "/contact" ? "#f57c48" : "",
              }}
              onClick={handleCloseMenu}
            >
              Contact
            </Link>

            <div className={styles.flexContainer}>
              <FaFacebook
                className={styles.socialNetworks}
                onClick={() => handleOpenLink("https://www.facebook.com/")}
              />
              <FaInstagram
                className={styles.socialNetworks}
                onClick={() => handleOpenLink("https://www.instagram.com/")}
              />
              <FaTwitter
                className={styles.socialNetworks}
                onClick={() => handleOpenLink("https://x.com/")}
              />
              <FaLinkedin
                className={styles.socialNetworks}
                onClick={() => handleOpenLink("https://www.linkedin.com/")}
              />
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
