import React, { useEffect, useState, useRef } from "react";
import styles from "./carousel.module.css";

import ChevLeft from "../icons/ChevLeft";
import ChevRight from "../icons/ChevRight";
import Indicator from "./Indicator";

const Carousel = () => {
  const [items, setItems] = useState([]);
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
    const fakeData = new Array(6).fill(false);

    setItems(fakeData);

    return () => {
      setItems([]);
      setIndex(0);
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

        <div className={`${styles.list}`}>
          {items.map((_, i) => (
            <div
              key={"item_" + i}
              className={`${styles.item}`}
              style={{ display: `${index === i ? "flex" : "none"}` }}
            >
              {i}
            </div>
          ))}
        </div>

        {/* <div className={`${styles.slideInfo}`}>
          <div className={`${styles.title}`}>
            Work, study
            <br />
            and stream
            <br />
            without limits.{" "}
          </div>
          <div className={`${styles.subtitle}`}>
            Your new device is just a <br />
            few clicks away.
          </div>
        </div> */}

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

        <div className={`${styles.textOverlay}`}></div>
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
