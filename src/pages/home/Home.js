import React from "react";
import styles from "./home.module.css";

import Hero from "../../components/hero/Hero";
import StepsCard from "./stepsCard/StepsCard";

const Home = () => {
  return (
    <div className={`${styles.container}`}>
      <Hero />
      <StepsCard />
    </div>
  );
};

export default Home;
