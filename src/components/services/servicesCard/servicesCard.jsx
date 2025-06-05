import styles from "./servicesCard.module.css";
import { Link } from "react-router-dom";

export default function ServicesCard({ icon: Icon, title, desc }) {
  return (
    <div className={styles.body}>
      <div className={styles.iconContainer}>
        {Icon && <Icon className={styles.icon} />}
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{desc}</p>

      <Link to="/contact" className={styles.link}>
        Contact Us <span className={styles.arrow}>&rarr;</span>
      </Link>
    </div>
  );
}
