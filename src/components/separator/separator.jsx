import styles from "./separator.module.css";

export default function Separator({ title }) {
  return (
    <div className={styles.container}>
      <div className={styles.line} />

      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
