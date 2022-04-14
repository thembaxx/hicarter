import React, { useRef, useEffect, useCallback } from "react";
import styles from "./carousel.module.css";

import ChevRight from "./icons/ChevRight";
import ChevLeft from "./icons/ChevLeft";

const scrollDirection = {
  next: "next",
  previous: "previous",
};

const Carousel = ({ items }) => {
  const transform = useRef(0);
  const carouselRef = useRef(0);
  const carouselWidth = useRef(0);
  const carouselScrollWidth = useRef(0);

  const handleScroll = (direction) => {
    if (!carouselRef.current) return;

    const itemWidth = 80; //80vw
    const margin = 20; //margin-right: 20px

    switch (direction) {
      case scrollDirection.next:
        transform.current -= (carouselWidth.current * itemWidth) / 100 + margin;
        break;
      case scrollDirection.previous:
        transform.current += (carouselWidth.current * itemWidth) / 100 + margin;
        break;
      default:
        transform.current = 0;
        break;
    }

    setTransform(transform.current);
  };

  const setTransform = (value) => {
    carouselRef?.current.scroll({
      top: 0,
      left: Math.abs(value),
      behavior: "smooth",
    });
  };

  //   ResizeObserver to handle width change.
  const handleResizeObserver = useCallback((entries) => {
    const entry = entries[0];
    let width;

    if (entry.contentBoxSize) {
      // Firefox implements `contentBoxSize` as a single content rect, rather than an array
      const contentBoxSize = Array.isArray(entry.contentBoxSize)
        ? entry.contentBoxSize[0]
        : entry.contentBoxSize;

      width = contentBoxSize.inlineSize;
    } else {
      width = entry.contentRect.width;
    }

    carouselWidth.current = width;
    carouselScrollWidth.current = carouselRef.current.scrollWidth;
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(handleResizeObserver);
    observer.observe(carouselRef?.current);
  }, [handleResizeObserver]);

  return (
    <div>
      <div ref={carouselRef} className={`${styles.list}`}>
        {items.map((item, i) => (
          <div key={i} className={`${styles.item}`}>
            {item}
          </div>
        ))}
      </div>
      <div className={`${styles.nav}`}>
        <div
          role="button"
          className={`${styles.navButton}`}
          onClick={() => handleScroll(scrollDirection.previous)}
        >
          <ChevLeft />
        </div>
        <div className={`${styles.vl}`}></div>
        <div
          role="button"
          className={`${styles.navButton}`}
          onClick={() => handleScroll(scrollDirection.next)}
        >
          <ChevRight />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
