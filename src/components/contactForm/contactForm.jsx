import { useState } from "react";
import styles from "./contactForm.module.css";
import BlueButton from "../buttons/blueButton";
import { FaHouse } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Swal from "sweetalert2";
import { validEmail } from "../../utils/regex";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const onChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !data.name ||
      !data.phone ||
      !data.email ||
      !data.address ||
      !data.message
    ) {
      Swal.fire({
        title: "Info!",
        text: "Complete all fields.",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else if (!validEmail(data.email)) {
      Swal.fire({
        title: "Info!",
        text: "Please enter a valid email address.",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "Success!",
        text: "Email sent success.",
        icon: "success",
        confirmButtonText: "Ok",
      });

      setData({
        name: "",
        phone: "",
        email: "",
        address: "",
        message: "",
      });
    }
  };

  return (
    <section className={styles.body}>
      <form className={styles.form}>
        <div className={styles.container}>
          <input
            className={styles.input}
            placeholder="Name"
            name="name"
            value={data.name}
            onChange={onChangeData}
          />
          <input
            className={styles.input}
            placeholder="Phone Number"
            name="phone"
            value={data.phone}
            onChange={onChangeData}
            type="number"
          />
        </div>

        <div className={styles.container}>
          <input
            className={styles.input}
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={onChangeData}
          />
          <input
            className={styles.input}
            placeholder="Address"
            name="address"
            value={data.address}
            onChange={onChangeData}
          />
        </div>

        <textarea
          className={styles.input}
          placeholder="Message"
          style={{ height: "85px" }}
          name="message"
          value={data.message}
          onChange={onChangeData}
        />

        <BlueButton width="100%" onClick={(e) => sendEmail(e)} />
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
