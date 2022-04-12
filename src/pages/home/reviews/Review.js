import React from "react";
import styles from "./review.module.css";

import StarIcon from "./icons/StarIcon";

const Review = ({ content, rating, name, date, imgUrl }) => {
  let starRating = rating ? Math.trunc(rating) : 0;
  const stars = new Array(starRating).fill(null);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.rating}`}>
        {stars.map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <div className={`${styles.paragraph}`}>{content}</div>
      <div className={`${styles.profile}`}>
        <div className={`${styles.imgWrapper}`}>
          <img className={`${styles.img}`} src={imgUrl} alt="" />
        </div>
        <div className={`${styles.info}`}>
          <div className={`${styles.name}`}>{name}</div>
          <div className={`${styles.date}`}>{date}</div>
        </div>
      </div>
    </div>
  );
};

export default Review;
