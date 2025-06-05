import styles from "./buttons.module.css";

export default function BlueButton({ onClick, width, value }) {
  return (
    <button
      className={styles.blueButton}
      onClick={onClick}
      style={{ width: width ? width : "fit-content" }}
    >
      {value}
    </button>
  );
}
