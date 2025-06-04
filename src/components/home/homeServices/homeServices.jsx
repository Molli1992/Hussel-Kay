import styles from "./homeServices.module.css";
import Separator from "../../separator/separator";
import BlueButton from "../../buttons/blueButton";
import { useNavigate } from "react-router-dom";
import ServicesCard from "../../services/servicesCard/servicesCard";
import { servicesData } from "../../../data/servicesData";

export default function HomeServices() {
  const navigate = useNavigate();

  const goServices = () => {
    navigate("/services");
  };

  return (
    <section className={styles.body}>
      <div className={styles.container}>
        <Separator title="SERVICES" />
        <h1 className={styles.title}>Services We Offer</h1>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text
          ever.
        </p>

        <div className={styles.buttonContainer}>
          <BlueButton value="View All Services" onClick={goServices} />
        </div>
      </div>

      <div className={styles.gridContainer}>
        {servicesData &&
          servicesData.map((service) => {
            if (service.id === 1 || service.id === 2 || service.id === 3) {
              return (
                <ServicesCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  desc={service.desc}
                />
              );
            }
          })}
      </div>
    </section>
  );
}
