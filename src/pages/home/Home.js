import React from "react";
import styles from "./home.module.css";

import Hero from "../../components/hero/Hero";
import StepsCard from "./stepsCard/StepsCard";
import Reviews from "./reviews/Reviews";

const Home = () => {
  return (
    <div className={`${styles.container}`}>
      <Hero />
      <div style={{ marginBottom: 40 }}>
        <StepsCard />
      </div>
      <Reviews />
    </div>
  );
};

export default Home;
