import React, { useEffect, useState, useRef } from "react";
import styles from "./carousel.module.css";

import ChevLeft from "../icons/ChevLeft";
import ChevRight from "../icons/ChevRight";
import Indicator from "./Indicator";
import Slide from "../slide/Slide";

const swipeDirection = {
  none: "none",
  left: "left",
  right: "right",
};

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalId = useRef(null);

  const threshold = useRef(150); //required min distance traveled to be considered swipe
  const restraint = useRef(100); // maximum distance allowed at the same time in perpendicular direction
  const allowedTime = useRef(300); // maximum time allowed to travel that distance
  let startX = 0;
  let startY = 0;
  let startTime = null;

  // Touch events
  const touchStart = (e) => {
    var touchobj = e.changedTouches[0];
    startX = touchobj.pageX;
    startY = touchobj.pageY;
    startTime = new Date().getTime();
    e.preventDefault();
  };

  const touchMove = (e) => {
    e.preventDefault();
  };

  const touchEnd = (e) => {
    let swipedir;

    var touchobj = e.changedTouches[0];
    const distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
    const distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
    const elapsedTime = new Date().getTime() - startTime; // get time elapsed

    if (elapsedTime <= allowedTime.current) {
      // first condition for awipe met
      if (
        Math.abs(distX) >= threshold.current &&
        Math.abs(distY) <= restraint.current
      ) {
        // 2nd condition for horizontal swipe met
        swipedir = distX < 0 ? swipeDirection.left : swipeDirection.right; // if dist traveled is negative, it indicates left swipe
      } else if (
        Math.abs(distY) >= threshold.current &&
        Math.abs(distX) <= restraint.current
      ) {
        // 2nd condition for vertical swipe met
        //swipedir = distY < 0 ? "up" : "down"; // if dist traveled is negative, it indicates up swipe
      }
    }
    handleScroll(swipedir);
    e.preventDefault();
  };

  const handleScroll = (direction) => {
    console.log(direction);
    switch (direction) {
      case swipeDirection.left:
        if (index === 0) {
          setIndex(items.length - 1);
        } else {
          setIndex((prev) => prev - 1);
        }

        break;
      case swipeDirection.right:
        if (index >= items.length - 1) {
          setIndex(0);
        } else {
          setIndex((prev) => prev + 1);
        }
        break;
      default:
        break;
    }
  };

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
      <div
        className={`${styles.carousel}`}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
      >
        {/* Nav Left */}
        <div
          role="button"
          className={`${styles.navButton} ${styles.navLeft}`}
          onClick={() => handleScroll(swipeDirection.left)}
          onTouchEnd={() => handleScroll(swipeDirection.left)}
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
          onClick={() => handleScroll(swipeDirection.right)}
          onTouchEnd={(e) => handleScroll(swipeDirection.right)}
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
