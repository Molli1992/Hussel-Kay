import styles from "./team.module.css";
import TeamCard from "./teamCard/teamCard";
import { teamData } from "../../data/teamData";

export default function Team() {
  return (
    <section className={styles.body}>
      <div className={styles.container}>
        {teamData &&
          teamData.map((data) => {
            return (
              <TeamCard
                src={data.src}
                name={data.name}
                role={data.role}
                key={data.name}
              />
            );
          })}
      </div>
    </section>
  );
}
