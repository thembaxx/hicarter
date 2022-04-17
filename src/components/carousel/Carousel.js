import React, { useRef, useEffect, useCallback, useState } from "react";
import styles from "./carousel.module.css";

// import ChevRight from "./icons/ChevRight";
// import ChevLeft from "./icons/ChevLeft";

// const scrollDirection = {
//   next: "next",
//   previous: "previous",
// };

const Carousel = ({ items }) => {
  const transform = useRef(0);
  const carouselRef = useRef(0);
  const carouselWidth = useRef(0);
  const carouselScrollWidth = useRef(0);
  const [scrollBars, setScrollBars] = useState([]);
  const [translateX, setTranslateX] = useState(0);

  const itemWidth = useRef(80); //80vw
  const margin = useRef(20); //margin-right: 20px

  // const handleScroll = (direction) => {
  //   if (!carouselRef.current) return;

  //   switch (direction) {
  //     case scrollDirection.next:
  //       transform.current -=
  //         (carouselWidth.current * itemWidth.current) / 100 + margin.current;
  //       break;
  //     case scrollDirection.previous:
  //       transform.current +=
  //         (carouselWidth.current * itemWidth.current) / 100 + margin.current;
  //       break;
  //     default:
  //       transform.current = 0;
  //       break;
  //   }

  //   setTransform(transform.current);
  // };

  const handleScrollBarClick = (index) => {
    const scrollBy =
      (carouselWidth.current * itemWidth.current) / 100 + margin.current;

    transform.current = scrollBy * index;
    console.log(transform.current);

    setTransform(transform.current);
  };

  const setTransform = (value) => {
    setTranslateX(value);
    // carouselRef?.current.scroll({
    //   top: 0,
    //   left: Math.abs(value),
    //   behavior: "smooth",
    // });
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
    // return () => {
    //   transform.current = 0;
    //   carouselRef.current = null;
    //   carouselWidth.current = 0;
    //   carouselScrollWidth.current = 0;
    //   setScrollBars([]);
    // };
  }, []);

  const width = 100 / items?.length;

  return (
    <div>
      <div ref={carouselRef} className={`${styles.list}`}>
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
          style={{ width: `${width}%`, transform: `${translateX}px` }}
        ></div>
      </div>
      {/* <div className={`${styles.nav}`}>
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
      </div> */}
    </div>
  );
};

export default Carousel;
