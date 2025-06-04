import styles from "./services.module.css";
import { servicesData } from "../../data/servicesData";
import ServicesCard from "./servicesCard/servicesCard";

export default function Services() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {servicesData &&
          servicesData.map((service) => {
            return (
              <ServicesCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                desc={service.desc}
              />
            );
          })}
      </div>
    </div>
  );
}
