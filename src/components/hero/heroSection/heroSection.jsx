import styles from "./heroSection.module.css";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import BlueButton from "../../buttons/blueButton";

export default function HeroSection() {
  const navigate = useNavigate();

  const goContact = () => {
    navigate("/contact");
  };

  const handleOpenLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.title}>DIGITAL SERVICES</h1>
        <p className={styles.text}>BUILDING YOUR EMPIRE DIGITALLY</p>
        <BlueButton onClick={goContact} />

        <div className={styles.iconsContainer}>
          <FaFacebook
            className={styles.icon}
            onClick={() => handleOpenLink("https://www.facebook.com/")}
          />
          <FaInstagram
            className={styles.icon}
            onClick={() => handleOpenLink("https://www.instagram.com/")}
          />
          <FaTwitter
            className={styles.icon}
            onClick={() => handleOpenLink("https://x.com/")}
          />

          <div className={styles.line} />
        </div>
      </div>
    </section>
  );
}
