import React from "react";
import styles from "./hero.module.css";

import Carousel from "./carousel/Carousel";

const Hero = () => {
  return (
    <div className={`${styles.container}`}>
      <Carousel items={items} />
      <div className={`${styles.actions}`}>
        {/* Browse cars button */}
        <div role="button" className={`${styles.button} ${styles.primary}`}>
          <div>Browse cars</div>
        </div>

        <div style={{ width: 10 }}></div>

        {/* Book service button */}
        <div role="button" className={`${styles.button} ${styles.secondary}`}>
          <div>Book a service</div>
        </div>
      </div>
    </div>
  );
};

const items = [
  {
    headline: (
      <span>
        Buy a car <br /> the easy way.
      </span>
    ),
    subheadline: (
      <span>
        Easy, fast and reliable. <br /> It's that simple.
      </span>
    ),
    img: "https://www.renault.co.za/CountriesData/South_Africa/images/DigitalSA/Kwid/NewKwid/Final_AR-AM-Kwid-Climber-boot-space-shot-v2_ig_w600_h337.jpg",
    action: {
      title: "browse cars",
      route: "/",
    },
  },
  {
    headline: (
      <span>
        Renault delear <br /> of the year
      </span>
    ),
    subheadline: (
      <span>
        The best service and support <br /> for our customers, always.
      </span>
    ),
    img: "https://www.renault.co.za/CountriesData/South_Africa/images/DigitalSA/Duster/TechRoad/Duster-TechRoad-3Q-Rear-Coast-Blue_ig_w800_h450.jpg",
    route: "",
  },
  {
    headline: (
      <span>
        The new <br /> Renault Kiger
      </span>
    ),
    subheadline: (
      <span>
        Now available, <br /> from only <b>R 3 099pm</b>.
      </span>
    ),
    img: "https://www.renault.co.za/CountriesData/South_Africa/images/KigerNew/1AttractiveStyling/8_2021_RenaultKIGER_ig_w800_h450.jpeg",
    action: {
      title: "view offer",
      route: "/",
    },
  },
];

export default Hero;
