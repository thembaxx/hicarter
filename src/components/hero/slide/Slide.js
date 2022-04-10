import React from "react";
import styles from "./slide.module.css";

const Slide = ({ active, headline, subheadline, img, action }) => {
  const animationClass = active ? `${styles.animate}` : `${styles.unanimate}`;
  return (
    <div
      className={`${styles.container}`}
      style={{ display: active ? "block" : "none" }}
    >
      <div className={`${styles.imgWrapper}`}>
        <img className={`${styles.img}`} src={img} alt="" />
      </div>
      <div className={`${styles.textOverlay}`}></div>

      <div className={`${styles.content}`}>
        <div className={`${styles.title} ${animationClass}`}>{headline}</div>
        <div className={`${styles.subtitle} ${animationClass}`}>
          {subheadline}
        </div>

        {action && (
          <div role="button" className={`${styles.button}`}>
            {action?.title}
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide;
