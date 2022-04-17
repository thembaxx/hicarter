import React from "react";
import styles from "./home.module.css";

import Header from "./header/Header";
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
      <Header />
      <div className={`${styles.subheader}`}>
        <div className={`${styles.heading}`}>
          Effortless car buying at your fingertips
        </div>
        <div className={`${styles.subheading}`}>
          Remove the guesswork and stress out of buying your next car. With
          carter, you'll get the service and advice that you deserve.
        </div>
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
