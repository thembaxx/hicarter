import React from "react";
import styles from "./indicator.module.css";

const Indicator = ({ active, radius, stroke, progress }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className={`${styles.container}`}>
      <svg
        height={radius * 2}
        width={radius * 2}
        style={{ opacity: active ? 1 : 0 }}
      >
        {/* Curtain */}
        <circle
          className={`${styles.curtain}`}
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          className={`${styles.circle}`}
          stroke="white"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>

      {/*  */}
      <div
        className={`${styles.bg}`}
        style={{ opacity: `${active ? 1 : 0.4}` }}
      ></div>
    </div>
  );
};

export default Indicator;
