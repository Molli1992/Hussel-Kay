import styles from "./reviewsCard.module.css";

export default function ReviewsCard({ desc, name, role }) {
  return (
    <div className={styles.bodyCard}>
      <p className={styles.desc}>{desc}</p>

      <div>
        <h1 className={styles.name}>{name}</h1>
        <h3 className={styles.role}>{role}</h3>
      </div>
    </div>
  );
}
