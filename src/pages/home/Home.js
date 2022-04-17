import React from "react";
import styles from "./home.module.css";
import { Plus, CaretDown } from "phosphor-react";

import Hero from "../../components/hero/Hero";
import StepsCard from "./stepsCard/StepsCard";
import Deals from "./deals/Deals";
import Reviews from "./reviews/Reviews";
import About from "./about/About";
import Faq from "./faq/Faq";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.assistant}`}>
        <div className={`${styles.heading}`}>
          Find the right car for your needs
        </div>
        {/* <p className={`${styles.subheading}`}>
          Let us help you find the right car for your needs.
        </p> */}
        {/* <div className={`${styles.tags}`}>
          <div className={`${styles.tag}`}>Budget</div>
          <div className={`${styles.tag}`}>Performance</div>
          <div className={`${styles.tag}`}>Balanced</div>
          <div className={`${styles.tag}`}>2 Door</div>
          <div className={`${styles.tag}`}>4 Door</div>
          <div className={`${styles.tag}`}>Auto</div>
          <div className={`${styles.tag}`}>Manual</div>
          <div className={`${styles.tag}`}>New</div>
          <div className={`${styles.tag}`}>Used</div>
        </div> */}

        {/* <hr className={`${styles.hr}`} /> */}
        <form>
          <div role="button" className={`${styles.dropdown}`}>
            <div>
              Choose car Brand{" "}
              <span style={{ opacity: 0.67, fontWeight: 400 }}>
                (BMW, Renault, Toyota etc.)
              </span>
            </div>
            <CaretDown size={18} />
          </div>
          <div role="button" className={`${styles.dropdown}`}>
            <div>
              Choose car Model{" "}
              {/* <span style={{ opacity: 0.67, fontWeight: 400 }}>(Optional)</span> */}
            </div>
            <CaretDown size={18} />
          </div>
          <div role="button" className={`${styles.button}`}>
            <Plus color="white" weight="bold" size={16} />
            <div style={{ marginLeft: 10 }}>More filters</div>
          </div>
          <div className={`${styles.submit}`}>Browse 12, 234 cars</div>
        </form>
      </div>
      <div className={`${styles.header}`}>
        Effortless car buying
        <br /> at your fingertips
      </div>
      <Hero />
      <div className={`${styles.main}`}>
        <StepsCard />
        <Deals />
        <Reviews />
        <About />
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
