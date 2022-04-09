import React from "react";
import styles from "./hero.module.css";

import ChevLeft from "./icons/ChevLeft";
import ChevRight from "./icons/ChevRight";
import CarIcon from "./icons/CarIcon";
import GearIcon from "./icons/GearIcon";

const Hero = () => {
  return (
    <div>
      {/* Carousel */}
      <div className={`${styles.carousel}`}>
        {/* Nav Left */}
        <div role="button" className={`${styles.navButton} ${styles.navLeft}`}>
          <ChevLeft />
        </div>

        {/* Nav right */}
        <div role="button" className={`${styles.navButton} ${styles.navRight}`}>
          <ChevRight />
        </div>
      </div>

      {/* Indicators */}
      <div className={`${styles.indicators}`}>
        <div className={`${styles.indicator}`}></div>
        <div className={`${styles.indicator}`}></div>
        <div className={`${styles.indicator}`}></div>
        <div className={`${styles.indicator} ${styles.activeIndicator}`}></div>
        <div className={`${styles.indicator}`}></div>
        <div className={`${styles.indicator}`}></div>
      </div>

      {/* Actions */}
      <div className={`${styles.actions}`}>
        {/* Browse cars button */}
        <div role="button" className={`${styles.button} ${styles.primary}`}>
          <div className={`${styles.icon}`}>
            <CarIcon />
          </div>
          <div>Browse cars</div>
        </div>

        <div style={{ width: 10 }}></div>

        {/* Book service button */}
        <div role="button" className={`${styles.button} ${styles.secondary}`}>
          <div className={`${styles.icon}`}>
            <GearIcon />
          </div>
          <div>Book service</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
