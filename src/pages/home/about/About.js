import React from "react";
import styles from "./about.module.css";
import { Medal } from "phosphor-react";

const About = () => {
  return (
    <div className={`${styles.about}`}>
      <div className={`${styles.header}`}>
        <div className={`${styles.headline}`}>About us</div>
        <p className={`${styles.subheading}`}>
          Since 2016, we have aimed to create a transparent, helpful and
          friendly experience for all our customers.
        </p>
      </div>
      <p className={`${styles.paragraph}`}>
        Behind Carter, is a group of dedicated individuals who are driven to
        provide a unique and profound customer experience. At Carter we believe
        that we better serve our customers as a team and strive to build
        trust-based relationships with our customers.
      </p>
      <div
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "white",
          opacity: 0.1,
          margin: "20px 0",
        }}
      ></div>
      <div className={`${styles.awards}`}>
        <div className={`${styles.headline}`}>Awards</div>
        <div className={`${styles.award}`}>
          <Medal
            size={24}
            color="var(--secondary-color)"
            style={{ marginTop: 2 }}
          />
          <span>
            <b>2020</b> | Renault Dealer of the Year (Carter Renault Melrose)
          </span>
        </div>
        <div className={`${styles.award}`}>
          <Medal
            size={24}
            color="var(--secondary-color)"
            style={{ marginTop: 2 }}
          />
          <span>
            <b>2021</b> | Renault Dealer of the Year (Carter Renault
            Springfield)
          </span>
        </div>
      </div>
      <div className={`${styles.button}`} role="button">
        <div>Read our story</div>
      </div>
    </div>
  );
};

export default About;
