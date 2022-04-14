import React from "react";
import styles from "./about.module.css";
import { CaretRight } from "phosphor-react";

const About = () => {
  return (
    <div className={`${styles.about}`}>
      <div className={`${styles.header}`}>
        <div className={`${styles.headline}`}>who are we</div>
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
      <div className={`${styles.button}`} role="button">
        <div>Our story</div>
        <CaretRight
          color="black"
          style={{ marginLeft: 5, marginTop: 1 }}
          size={14}
        />
      </div>
    </div>
  );
};

export default About;
