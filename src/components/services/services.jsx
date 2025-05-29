import React from "react";
import styles from "./services.module.css";

function Services() {
  return (
    <div className={styles.body}>
      <div className={styles.container} style={{ flexDirection: "column" }}>
        <h1 className={styles.title}>Services</h1>
        <p className={styles.description}>
          At Hussel Kay, we offer a wide range of digital marketing services
          designed to help small and medium-sized businesses achieve their full
          growth potential online. Our services are tailored to meet the unique
          needs of each client, ensuring a customized approach that aligns with
          their business objectives and target audience. Whether it's building a
          brand identity, increasing visibility, generating leads, or improving
          conversions, our team combines strategy, creativity, and analytics to
          deliver outstanding results. We are committed to supporting every
          phase of your digital journey with high-impact solutions and expert
          guidance.
        </p>
      </div>

      <div className={styles.container}>
        <img
          src="https://www.occ.com.mx/blog/wp-content/uploads/2018/12/community-manager-OCCMundial.jpg"
          className={styles.img}
          alt="Logo"
        />

        <div className={styles.containerText}>
          <h1 className={styles.textTitle}>Community Manager:</h1>
          <p className={styles.text}>
            We take care of administering and managing our clients' social
            networks effectively, making sure to create and publish high-quality
            and relevant content for your audience, increase your reach and
            engagement, and promote your brand and products effectively. Our
            community managers are experts in audience analysis, brand voice
            consistency, and strategic scheduling to maximize performance across
            platforms like Instagram, Facebook, LinkedIn, and more. By
            responding to interactions, monitoring sentiment, and engaging in
            real-time, we foster meaningful connections with your followers and
            turn audiences into loyal brand advocates who actively participate
            in your growth.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.containerText}>
          <h1 className={styles.textTitle}>Paid Ads:</h1>
          <p className={styles.text}>
            We develop effective advertising campaigns on Google, Facebook,
            Instagram and other advertising platforms, making sure to maximize
            the return on investment of our clients and achieve the established
            performance objectives. Our ad specialists design precise targeting
            strategies using audience segmentation, behavior tracking, and
            keyword optimization to ensure that every campaign reaches the right
            people at the right time. We continuously A/B test creatives,
            analyze performance metrics, and adjust bids in real-time to drive
            results and reduce wasted spend. Whether it's for lead generation,
            product sales, or brand awareness, our paid media approach is
            focused, agile, and data-backed.
          </p>
        </div>

        <img
          src="https://blog.thomasnet.com/hubfs/shutterstock_630306113.jpg"
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
          <h1 className={styles.textTitle}>Digital communication strategy:</h1>
          <p className={styles.text}>
            We develop effective branding and performance strategies for our
            clients, using tools such as SEO, email marketing, marketing
            automation and other digital marketing resources to ensure a strong
            and consistent online presence. Our approach includes market
            research, customer journey mapping, and defining clear KPIs to align
            messaging with user intent across every digital touchpoint. We
            integrate all communication channels—organic and paid—to create a
            seamless brand experience that drives engagement and builds trust.
            From nurturing leads to converting prospects, our strategies are
            built to scale with your business and adapt to a fast-evolving
            digital landscape.
          </p>
        </div>

        <img
          src="https://www.striata.com/wp-content/uploads/2019/06/digital-touchpoints-of-the-customer-journey.png"
          className={styles.img}
          style={{ width: "100%" }}
          alt="Logo"
        />
      </div>

      <div className={styles.container}>
        <div className={styles.containerText}>
          <h1 className={styles.textTitle}>Content generation:</h1>
          <p className={styles.text}>
            We take care of generating high-quality and relevant content for our
            clients, including blog articles, social media posts, videos,
            infographics and other types of content designed to attract and
            retain the attention of your audience. Our content team works with
            in-depth SEO and storytelling principles to ensure that every piece
            not only aligns with your brand identity, but also ranks well and
            drives traffic. We tailor content calendars based on trends, search
            data, and audience interests to deliver consistent value across all
            platforms. Whether it's educating, entertaining, or inspiring,
            content is at the core of our strategy to build long-term audience
            loyalty and authority in your niche.
          </p>
        </div>

        <img
          src="https://cdn.clickworker.com/wp-content/uploads/2016/11/content-planning.png"
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
          <h1 className={styles.textTitle}>Design:</h1>
          <p className={styles.text}>
            We have a design team specialized in creating attractive and
            effective designs for websites, social networks, advertising and
            other digital materials. Our designers combine creativity with UX
            best practices to craft visuals that are not only beautiful but also
            functional and conversion-focused. From responsive web layouts to
            eye-catching banners and branding assets, we ensure every design
            aligns with your business goals and communicates your message
            clearly. Through thoughtful color choices, typography, and layout
            hierarchy, we create visual stories that engage, inspire, and
            deliver results across all your digital channels.
          </p>
        </div>

        <img
          src="https://img.freepik.com/foto-gratis/concepto-programacion-navegacion-tecnologia-diseno-web_53876-163260.jpg?semt=ais_hybrid&w=740"
          className={styles.img}
          style={{ width: "100%" }}
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default Services;
