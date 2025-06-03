import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/Logos-Hussel-Kay.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export default function Header() {
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    }

    if (menu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu]);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.logoContainer}`}>
        <img src={Logo} alt="Logo" className={styles.logo} />
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

      {menu ? (
        <div className={styles.menu} ref={menuRef}>
          <div className={styles.menuContainer}>
            <img src={Logo} alt="Logo" className={styles.logo} />

            <div>
              <button className={styles.button} onClick={() => setMenu(false)}>
                <IoCloseSharp />
              </button>
            </div>
          </div>

          <ul className={styles.menuList}>
            <Link
              to="/"
              className={styles.link}
              style={{ color: location.pathname === "/" ? "#f57c48" : "" }}
              onClick={() => setMenu(false)}
            >
              Home
            </Link>

            <Link
              to="/services"
              className={styles.link}
              style={{
                color: location.pathname === "/services" ? "#f57c48" : "",
              }}
              onClick={() => setMenu(false)}
            >
              Services
            </Link>

            <Link
              to="/team"
              className={styles.link}
              style={{ color: location.pathname === "/team" ? "#f57c48" : "" }}
              onClick={() => setMenu(false)}
            >
              Team
            </Link>

            <Link
              to="/contact"
              className={styles.link}
              style={{
                color: location.pathname === "/contact" ? "#f57c48" : "",
              }}
              onClick={() => setMenu(false)}
            >
              Contact
            </Link>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
