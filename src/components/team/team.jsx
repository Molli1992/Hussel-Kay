import styles from "./team.module.css";

function Team() {
  return (
    <div className={styles.body}>
      <div className={styles.container} style={{ flexDirection: "column" }}>
        <h1 className={styles.title}>Team</h1>
        <p className={styles.description}>
          At Hussel Kay, we have a team of highly trained digital experts with
          experience in different areas of digital marketing. All of our team
          members are certified by Google and other digital platforms, ensuring
          that we have the knowledge and skills to deliver high-quality digital
          marketing solutions to our clients. We believe in continuous learning
          and development, which is why our professionals regularly attend
          industry conferences, workshops, and training sessions to stay ahead
          of trends. Our team works in synergy to tackle complex marketing
          challenges, offering a comprehensive approach that combines
          creativity, technical expertise, and data-driven decision making to
          deliver exceptional value for every client we serve.
        </p>
      </div>

      <div className={styles.container}>
        <img
          src="https://paypertalent.com/images/digital-marketing-team.jpg"
          className={styles.img}
          alt="Logo"
        />

        <div className={styles.containerText}>
          <p className={styles.text}>
            Our team is made up of professionals in different areas, such as
            SEO, social networks, online advertising, design, content marketing
            and more. Each one of them contributes their experience and
            knowledge to ensure that our clients receive a high quality and
            personalized digital marketing service. From strategic planners to
            technical SEO specialists, content writers, and graphic designers,
            each member plays a key role in delivering integrated solutions that
            meet our clients' goals. This multidisciplinary collaboration allows
            us to provide tailored strategies that align with each business's
            target audience and industry dynamics. We place a strong emphasis on
            internal communication and teamwork, ensuring that our workflows are
            efficient and our deliverables exceed expectations at every stage.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.containerText}>
          <p className={styles.text}>
            We focus on staying up to date with the latest digital marketing
            trends and tools, and we constantly work on improving and updating
            our skills and knowledge to deliver cutting-edge digital marketing
            solutions to our clients. This includes adopting emerging
            technologies such as AI-driven analytics, marketing automation
            systems, and the latest algorithm updates from major platforms like
            Google and Meta. We frequently test and iterate on new tools and
            techniques to optimize campaign performance, increase customer
            engagement, and maintain a competitive edge. Our team culture
            promotes innovation and encourages experimentation, which helps us
            stay creative, proactive, and highly adaptive in a rapidly changing
            digital landscape.
          </p>
        </div>

        <img
          src="https://vertexmarketingagency.com/wp-content/uploads/2019/10/how-digital-marketing-works.jpg"
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
            Your Trusted Partner in Digital Marketing:
          </h1>
          <p className={styles.text}>
            At Hussel Kay, we are committed to providing high-quality service to
            our clients, and our team is the key to achieving this. If you are
            looking for a reliable and professional digital marketing company,
            do not hesitate to contact us to learn more about our team and how
            we can help you achieve your online goals! Our experts take time to
            understand your unique business needs, goals, and target market to
            create strategies that are fully aligned with your vision. We pride
            ourselves on transparency, accountability, and long-term
            partnerships. Every member of our team is driven by a shared mission
            to help your business grow, and we measure our success by the impact
            we create for our clients. Let us become an extension of your team,
            guiding you through every step of your digital transformation and
            ensuring measurable success across all your marketing channels.
          </p>
        </div>

        <img
          src="https://www.socialmediaexaminer.com/wp-content/uploads/2014/07/ms-shutterstock-pic-164375498-stock-photo-good-service-makes-the-difference.jpg"
          className={styles.img}
          style={{ width: "100%" }}
          alt="Logo"
        />
      </div>
    </div>
  );
}

export default Team;
