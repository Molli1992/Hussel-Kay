import React from "react";
import styles from "./home.module.css";
import Logo from "../../logos/Logos-Hussel-Kay.png";

function Home() {
  return (
    <div className={styles.body}>
      <div
        className={styles.container}
        style={{ flexDirection: "column", gap: "10px" }}
      >
        <img src={Logo} alt="Logo" className={styles.logo} />
        <p className={styles.description}>Digital Marketing</p>
      </div>

      <div className={styles.container}>
        <img
          src="https://d500.epimg.net/cincodias/imagenes/2020/04/25/pyme/1587818498_248037_1587818664_noticia_normal.jpg"
          className={styles.img}
          alt="Logo"
        />

        <div className={styles.containerText}>
          <p className={styles.text}>
            At Hussel Kay, we are dedicated to helping small and medium-sized
            businesses (SMBs) develop their online presence and reach their full
            growth potential through the implementation of effective digital
            marketing strategies. We believe that every business, regardless of
            size, deserves access to high-quality marketing tools and guidance
            to compete in the modern digital economy. Our approach is
            client-centric and data-informed, ensuring that we create tailored
            strategies that maximize visibility, engagement, and conversions. By
            understanding each client’s unique challenges and market position,
            we can craft campaigns that build brand equity and drive sustainable
            growth over time.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.containerText}>
          <p className={styles.text}>
            Our mission is to provide our clients with the best possible
            service, and to be recognized by them as a reliable and solid
            company in the field of digital marketing. We focus on developing
            solid relationships with our clients, based on trust and
            personalized attention to their needs and objectives. We take pride
            in offering hands-on support, detailed performance reporting, and
            proactive recommendations to help businesses navigate the evolving
            digital landscape. We view our clients not just as customers, but as
            long-term partners in success, and we go the extra mile to ensure
            their satisfaction and progress. Whether it's increasing brand
            awareness, driving website traffic, or boosting sales, our mission
            remains rooted in real, measurable outcomes.
          </p>
        </div>

        <img
          src="https://www.equiposytalento.com/contenido/noticias/20210603adamsportada607.jpg"
          className={styles.img}
          alt="Logo"
        />
      </div>

      <div className={styles.container} style={{ flexDirection: "column" }}>
        <div
          className={styles.containerText}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <h1 className={styles.textTitle}>
            Innovative Digital Solutions for Modern Challenges:
          </h1>
          <p className={styles.text}>
            At Hussel Kay, we value perseverance and creativity in finding
            effective solutions to the challenges our clients face. We make sure
            that we are always up to date on the latest trends and digital
            marketing tools, and that we apply them effectively in each of our
            projects. Our team thrives on innovation, and we are constantly
            exploring new platforms, techniques, and strategies to give our
            clients a competitive edge. We believe that every challenge presents
            an opportunity for creativity, and we aim to turn obstacles into
            breakthroughs. From automation and analytics to AI-driven insights
            and omnichannel integration, we are committed to delivering
            cutting-edge digital solutions that are scalable, flexible, and
            future-proof.
          </p>
        </div>

        <img
          src="https://blog.bind.com.ar/wp-content/uploads/2019/09/shutterstock_357105203.jpg"
          className={styles.img}
          style={{ width: "100%" }}
          alt="Logo"
        />
      </div>

      <div className={styles.container} style={{ flexDirection: "column" }}>
        <div
          className={styles.containerText}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
          <h1 className={styles.textTitle}>
            Certified Digital Marketing Experts:
          </h1>
          <p className={styles.text}>
            We believe in the importance of teamwork, which is why we have a
            team of digital experts with extensive experience in the field of
            digital marketing, certified and validated by Google and Meta. We
            are proud to be able to offer our clients a quality, professional
            and personalized service. Our team members undergo continuous
            training and certification to stay at the forefront of digital
            innovation, ensuring that every client benefits from the most
            effective and ethical marketing practices available. This dedication
            to excellence and education empowers us to deliver customized,
            performance-driven strategies backed by the latest tools and
            technologies. With a focus on collaboration, transparency, and
            measurable success, our certified professionals help brands achieve
            long-term growth and industry authority.
          </p>
        </div>

        <img
          src="https://graciads.com/wp-content/uploads/2021/02/2-4.jpg"
          className={styles.img}
          style={{ width: "100%" }}
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default Home;
