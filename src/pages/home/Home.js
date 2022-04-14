import React from "react";
import styles from "./home.module.css";
import { Plus, CaretDown, Sparkle } from "phosphor-react";

import Hero from "../../components/hero/Hero";
import StepsCard from "./stepsCard/StepsCard";
import Deals from "./deals/Deals";
import Reviews from "./reviews/Reviews";
import About from "./about/About";

const Home = () => {
  return (
    <div className={`${styles.container}`}>
      <div id="assistant" className={`${styles.assistant}`}>
        <div className={`${styles.heading}`}>What are you looking for?</div>
        <p className={`${styles.subheading}`}>
          Let us help you find the right car for your needs.
        </p>
        <div className={`${styles.tags}`}>
          <div className={`${styles.tag}`}>Fuel efficient</div>
          <div className={`${styles.tag}`}>2 4oor</div>
          <div className={`${styles.tag}`}>4 Door</div>
          <div className={`${styles.tag}`}>Sedan</div>
          <div className={`${styles.tag}`}>Utitlity</div>
          <div className={`${styles.tag}`}>Auto</div>
          <div className={`${styles.tag}`}>Manual</div>
          <div className={`${styles.tag}`}>Used</div>
        </div>
        <div role="button" className={`${styles.button}`}>
          <Plus color="white" weight="bold" size={16} />
          <div style={{ marginLeft: 10 }}>More filters</div>
        </div>
        <hr className={`${styles.hr}`} />
        <form>
          <div role="button" className={`${styles.dropdown}`}>
            <div>
              Brand{" "}
              <span style={{ opacity: 0.67, fontWeight: 400 }}>(Optional)</span>
            </div>
            <CaretDown size={18} />
          </div>
          <div role="button" className={`${styles.dropdown}`}>
            <div>
              Model{" "}
              <span style={{ opacity: 0.67, fontWeight: 400 }}>(Optional)</span>
            </div>
            <CaretDown size={18} />
          </div>
          <div className={`${styles.submit}`}>Search 12, 234 cars</div>
        </form>
      </div>
      <Hero />
      <div
        className={`${styles.main}`}
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
        <About />
      </div>

      <a href="#assistant" className={`${styles.assistButton}`}>
        <Sparkle size={18} color="var(--primary-color)" weight="fill" />
      </a>
    </div>
  );
};

export default Home;
