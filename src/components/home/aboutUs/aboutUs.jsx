import styles from "./aboutUs.module.css";
import Separator from "../../separator/separator";
import imgAbout from "../../../assets/images/about.png";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <Separator title="ABOUT US" />
          <h1 className={styles.title}>
            Explore Our Services And Boost Your Online Presence
          </h1>
          <p className={styles.parrafo}>
            We are a creative digital marketing agency committed to helping
            brands grow and thrive online. With a team of passionate
            strategists, designers, and developers, we craft custom marketing
            solutions tailored to each client's goals. Our mission is to drive
            real results through smart strategy, eye-catching design, and
            innovative digital experiences. From startups to established
            businesses, we help our clients build meaningful connections with
            their audience.
          </p>

          <div className={styles.flexContainer}>
            <FaRegCircleCheck className={styles.icon} />

            <p className={styles.text}>
              Customized marketing strategies designed to meet your business
              goals.
            </p>
          </div>

          <div className={styles.flexContainer}>
            <FaRegCircleCheck className={styles.icon} />

            <p className={styles.text}>
              Data-driven campaigns that boost visibility and drive real
              engagement.
            </p>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <div className={styles.imgSubContainer}>
            <img src={imgAbout} alt="About Us" className={styles.img} />
            <div className={styles.circle}>
              <h1 className={styles.circleTitle}>3+</h1>
              <p className={styles.circleText}>YEARS OF EXPERIENCIE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
