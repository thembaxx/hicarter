import React, { useEffect, useState, useRef } from "react";
import styles from "./carousel.module.css";

import ChevLeft from "../icons/ChevLeft";
import ChevRight from "../icons/ChevRight";
import Indicator from "./Indicator";
import Slide from "../slide/Slide";

const Carousel = ({ items }) => {
  // const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalId = useRef(null);

  const resetTimer = () => {
    if (intervalId.current) {
      setProgress(0);
      clearInterval(intervalId.current);
    }
  };

  useEffect(() => {
    resetTimer();

    intervalId.current = setInterval(() => {
      setProgress((prev) => prev + 10);
    }, 1000);

    return () => {
      resetTimer();
    };
  }, [index]);

  useEffect(() => {
    if (progress >= 100) {
      setIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [progress, items.length]);

  useEffect(() => {
    return () => {
      setIndex(0);
      intervalId.current = null;
      resetTimer();
    };
  }, []);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.carousel}`}>
        {/* Nav Left */}
        <div
          role="button"
          className={`${styles.navButton} ${styles.navLeft}`}
          onClick={() => {
            if (index === 0) {
              setIndex(items.length - 1);
            } else {
              setIndex((prev) => prev - 1);
            }
          }}
        >
          <ChevLeft />
        </div>

        {/* items */}
        <div className={`${styles.list}`}>
          {items.map(({ action, headline, subheadline, img, route }, i) => (
            <Slide
              active={index === i}
              headline={headline}
              subheadline={subheadline}
              img={img}
              action={action}
            />
          ))}
        </div>

        {/* Nav right */}
        <div
          role="button"
          className={`${styles.navButton} ${styles.navRight}`}
          onClick={() => {
            if (index >= items.length - 1) {
              setIndex(0);
            } else {
              setIndex((prev) => prev + 1);
            }
          }}
        >
          <ChevRight />
        </div>
      </div>
      {/* Indicators */}
      <div className={`${styles.indicators}`}>
        {items.map((_, i) => (
          <div
            key={i}
            onClick={() => {
              setIndex(i);
            }}
          >
            <Indicator
              active={index === i}
              radius={14}
              stroke={3}
              progress={index === i ? progress : 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
