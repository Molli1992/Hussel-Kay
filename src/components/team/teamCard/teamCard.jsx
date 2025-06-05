import styles from "./teamCard.module.css";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { handleOpenLink } from "../../../utils/utils";

export default function TeamCard({ src, name, role }) {
  return (
    <div
      className={styles.body}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div className={styles.container}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.role}>{role}</p>

        <div className={styles.iconContainer}>
          <div className={styles.icon}>
            <FaFacebookF
              onClick={() => handleOpenLink("https://www.facebook.com/")}
            />
          </div>

          <div className={styles.icon}>
            <FaWhatsapp
              onClick={() => handleOpenLink("https://www.whatsapp.com/")}
            />
          </div>

          <div className={styles.icon}>
            <FaInstagram
              onClick={() => handleOpenLink("https://www.instagram.com/")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
