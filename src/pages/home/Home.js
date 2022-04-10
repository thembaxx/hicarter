import React from "react";
import styles from "./home.module.css";

import Hero from "../../components/hero/Hero";
import Card from "../../components/card/Card";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className={`${styles.intro}`}>
        <Card>
          <div className={`${styles.inner}`}>
            <div className={`${styles.heading}`}>
              Take the hassle out of buying a car.
            </div>
            <div className={`${styles.subheading}`}>
              Remove the stress and guesswork of buying a new car. With Carter,
              buying a new car is easy with 3 simple steps.
            </div>
            <div>
            <div className={`${styles.step}`}>
              <div className={`${styles.stepTitle}`}>Choose a vehicle</div>
              <p className={`${styles.stepText}`}>
                Simply select the vehicle you are interested in, view all it's
                features and request a quote in less than a minute.
              </p>
            </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
