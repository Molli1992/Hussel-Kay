import styles from "./contactForm.module.css";
import BlueButton from "../buttons/blueButton";
import { FaHouse } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function ContactForm() {
  return (
    <section className={styles.body}>
      <form className={styles.form}>
        <div className={styles.container}>
          <input className={styles.input} placeholder="Name" />
          <input className={styles.input} placeholder="Phone Number" />
        </div>

        <div className={styles.container}>
          <input className={styles.input} placeholder="Email" />
          <input className={styles.input} placeholder="Address" />
        </div>

        <textarea
          className={styles.input}
          placeholder="Message"
          style={{ height: "85px" }}
        />

        <BlueButton width="100%" />
      </form>

      <div className={styles.container}>
        <div className={styles.containerData}>
          <div>
            <div className={styles.containerIcons}>
              <FaHouse style={{ fontSize: "25px" }} />
            </div>
          </div>

          <p className={styles.text}>3511 NW 113TH CT DORAL, FL 33178</p>
        </div>

        <div className={styles.containerData}>
          <div>
            <div className={styles.containerIcons}>
              <FaPhoneAlt style={{ fontSize: "22px" }} />
            </div>
          </div>

          <p className={styles.text}>+1 (786) 834 1705</p>
        </div>

        <div
          className={styles.containerData}
          style={{ border: "none", padding: "0px" }}
        >
          <div>
            <div className={styles.containerIcons}>
              <IoIosMail style={{ fontSize: "31px" }} />
            </div>
          </div>

          <p className={styles.text}>husselkayllc@gmail.com</p>
        </div>
      </div>
    </section>
  );
}
