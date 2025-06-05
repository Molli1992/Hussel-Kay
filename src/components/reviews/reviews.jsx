import { useState } from "react";
import styles from "./reviews.module.css";
import ReviewsCard from "./reviewsCard/reviewsCard";
import { reviewsData } from "../../data/reviewsData";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

export default function Reviews() {
  const [index, setIndex] = useState(1);

  const handleChange = (param) => {
    setIndex((prev) => {
      if (param === "more") {
        return prev === 3 ? 1 : prev + 1;
      } else {
        return prev === 1 ? 3 : prev - 1;
      }
    });
  };

  return (
    <div className={styles.bodyReviews}>
      <div className={styles.container}>
        <h1 className={styles.title}>WHAT OUR CLIENT SAYS</h1>

        <div className={styles.containerReviews}>
          <div>
            <TfiArrowCircleLeft
              className={styles.icon}
              onClick={() => handleChange("less")}
            />
          </div>

          {reviewsData &&
            reviewsData.map((review) => {
              if (review.index === index) {
                return (
                  <ReviewsCard
                    desc={review.desc}
                    name={review.name}
                    role={review.role}
                  />
                );
              }
              return null;
            })}

          <div>
            <TfiArrowCircleRight
              className={styles.icon}
              onClick={() => handleChange("more")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
