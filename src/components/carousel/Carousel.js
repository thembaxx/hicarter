import React, { useRef, useEffect, useCallback, useState } from "react";
import styles from "./carousel.module.css";

// import ChevRight from "./icons/ChevRight";
// import ChevLeft from "./icons/ChevLeft";

const scrollDirection = {
  next: "next",
  previous: "previous",
};

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);
  const [scrollPerc, setScrollPerc] = useState(0);
  const carouselRef = useRef(0);
  const carouselWidth = useRef(0);
  const carouselScrollWidth = useRef(0);
  const [scrollBars, setScrollBars] = useState([]);
  const [translateX, setTranslateX] = useState(0);

  const itemWidth = useRef(80); //80vw
  const margin = useRef(20); //margin-right: 20px

  const handleScroll = (direction) => {
    switch (direction) {
      case scrollDirection.next:
        if (index === 0) {
          setIndex(items.length - 1);
        } else {
          setIndex((prev) => prev - 1);
        }

        break;
      case scrollDirection.previous:
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

  const handleScrollBarClick = (i) => {
    setIndex(i);
  };

  const threshold = useRef(100); //required min distance traveled to be considered swipe
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
        swipedir = distX < 0 ? scrollDirection.previous : scrollDirection.next; // if dist traveled is negative, it indicates left swipe
      }
    }

    handleScroll(swipedir);
    e.preventDefault();
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

    const bars = new Array(items.length).fill(0);
    setScrollBars(bars);
  }, [handleResizeObserver, items.length]);

  useEffect(() => {
    const scrollBy =
      (carouselWidth.current * itemWidth.current) / 100 + margin.current;

    const tx = scrollBy * index * -1;
    const perc =
      Math.abs(tx / carouselScrollWidth.current) * (items.length * 100);

    if (!isNaN(tx)) {
      setTranslateX(tx);
      setScrollPerc(perc);
    }
  }, [index, items.length]);

  const width = 100 / items?.length;

  return (
    <div className={`${styles.container}`}>
      <div
        ref={carouselRef}
        className={`${styles.list}`}
        style={{ transform: `translateX(${translateX}px)` }}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
      >
        {items.map((item, i) => (
          <div key={i} className={`${styles.item}`}>
            {item}
          </div>
        ))}
      </div>
      <div className={`${styles.scroller}`}>
        <div className={`${styles.curtains}`}>
          {scrollBars.map((_, i) => {
            return (
              <div
                key={i}
                className={`${styles.curtain}`}
                style={{ width: `${width}%` }}
                onClick={() => handleScrollBarClick(i)}
              ></div>
            );
          })}
        </div>
        <div
          className={`${styles.thumb}`}
          style={{
            width: `${width}%`,
            transform: `translateX(${scrollPerc}%)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Carousel;
