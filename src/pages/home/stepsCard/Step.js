import React from "react";
import styles from "./step.module.css";

const Step = ({ Img, index, title, subtitle }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.imgWrapper}`}>
        <Img />
        <div className={`${styles.badge}`}>{index}</div>
      </div>
      <div className={`${styles.content}`}>
        <div className={`${styles.title}`}>{title}</div>
        <div className={`${styles.subtitle}`}>{subtitle}</div>
      </div>
    </div>
  );
};

export default Step;
