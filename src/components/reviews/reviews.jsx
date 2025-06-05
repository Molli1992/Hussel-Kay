import { useState, useEffect, useRef } from "react";
import styles from "./reviews.module.css";
import ReviewsCard from "./reviewsCard/reviewsCard";
import { reviewsData } from "../../data/reviewsData";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

export default function Reviews() {
  const [index, setIndex] = useState(1);
  const [direction, setDirection] = useState("right");
  const intervalRef = useRef(null);

  const handleChange = (param) => {
    setDirection(param === "more" ? "right" : "left");

    setIndex((prev) => {
      if (param === "more") {
        return prev === 3 ? 1 : prev + 1;
      } else {
        return prev === 1 ? 3 : prev - 1;
      }
    });

    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDirection("right");
      setIndex((prev) => (prev === 3 ? 1 : prev + 1));
    }, 5000);
  };

  useEffect(() => {
    resetInterval();

    return () => clearInterval(intervalRef.current);
  }, []);

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
                  <div
                    key={index}
                    className={`${styles.cardAnimation} ${
                      direction === "right"
                        ? styles.slideRight
                        : styles.slideLeft
                    }`}
                  >
                    <ReviewsCard
                      desc={review.desc}
                      name={review.name}
                      role={review.role}
                    />
                  </div>
                );
              }
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
