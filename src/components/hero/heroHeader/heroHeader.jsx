import styles from "./heroHeader.module.css";
import { Link } from "react-router-dom";

export default function HeroHeader({ title, route }) {
  return (
    <section className={styles.body}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <p className={styles.line}>//</p>
        <p className={styles.text}>{route}</p>
      </div>
    </section>
  );
}
