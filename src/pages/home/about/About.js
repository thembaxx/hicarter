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
          width: "calc(100% - 56px)",
          backgroundColor: "white",
          opacity: 0.1,
          margin: "32px 0px",
          marginLeft: 20,
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
          <div style={{ marginLeft: 12 }}>
            <div>
              <b>2020</b> | Renault Dealer of the Year
            </div>
            <div style={{ fontWeight: 400, opacity: 0.87 }}>
              Carter Renault Melrose
            </div>
          </div>
        </div>
        <div className={`${styles.award}`}>
          <Medal
            size={24}
            color="var(--secondary-color)"
            style={{ marginTop: 2 }}
          />
          <div style={{ marginLeft: 12 }}>
            <div>
              <b>2021</b> | Renault Dealer of the Year
            </div>
            <div style={{ fontWeight: 400, opacity: 0.87 }}>
              Carter Renault Springfield
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.button}`} role="button">
        <div>more about us</div>
      </div>
    </div>
  );
};

export default About;
