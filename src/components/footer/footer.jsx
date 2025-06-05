import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logos/Logos-Hussel-Kay.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { handleOpenLink } from "../../utils/utils";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <footer className={styles.body}>
      <div className={styles.footer}>
        <div className={styles.container}>
          <img src={Logo} alt="Logo" className={styles.logo} onClick={goHome} />

          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className={styles.flexContainer}>
            <FaFacebook
              className={`${styles.title} ${styles.socialNetworks}`}
              onClick={() => handleOpenLink("https://www.facebook.com/")}
            />
            <FaInstagram
              className={`${styles.title} ${styles.socialNetworks}`}
              onClick={() => handleOpenLink("https://www.instagram.com/")}
            />
            <FaTwitter
              className={`${styles.title} ${styles.socialNetworks}`}
              onClick={() => handleOpenLink("https://x.com/")}
            />
            <FaLinkedin
              className={`${styles.title} ${styles.socialNetworks}`}
              onClick={() => handleOpenLink("https://www.linkedin.com/")}
            />
          </div>
        </div>

        <nav className={styles.container}>
          <h1 className={styles.title}>Quick Links</h1>

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
            className={styles.link}
            style={{
              color: location.pathname === "/contact" ? "#f57c48" : "",
            }}
          >
            Contact
          </Link>
        </nav>

        <div className={styles.container}>
          <h1 className={styles.title}>Get Connected</h1>

          <div className={styles.flexContainer}>
            <FaPhoneAlt className={styles.title} />
            <p className={styles.text}>+1 (786) 834 1705</p>
          </div>

          <div className={styles.flexContainer}>
            <LuMail className={styles.title} />
            <p className={styles.text}>husselkayllc@gmail.com</p>
          </div>

          <div className={styles.flexContainer}>
            <FaRegClock className={styles.title} />
            <p className={styles.text}>Office Hours: 10AM - 6PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
