import React from "react";
import styles from "./home.module.css";

import Hero from "../../components/hero/Hero";
import StepsCard from "./stepsCard/StepsCard";
import Deals from "./deals/Deals";
import Reviews from "./reviews/Reviews";

const Home = () => {
  return (
    <div className={`${styles.container}`}>
      <Hero />
      <div
        style={{
          backgroundColor: "white",
          position: "relative",
          zIndex: 15,
          paddingTop: 1,
        }}
      >
        <div style={{ marginBottom: 40 }}>
          <StepsCard />
        </div>
        <Deals />
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
