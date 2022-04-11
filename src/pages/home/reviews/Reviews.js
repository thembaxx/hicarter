import React, { useRef, useEffect, useCallback } from "react";
import styles from "./reviews.module.css";

import Review from "./Review";

const scrollDirection = {
  next: "next",
  previous: "previous",
};

const Reviews = () => {
  const transform = useRef(0);
  const carouselRef = useRef(0);
  const carouselWidth = useRef(0);
  const carouselScrollWidth = useRef(0);

  const handleScroll = (direction) => {
    if (!carouselRef.current) return;

    switch (direction) {
      case scrollDirection.next:
        transform.current -= carouselWidth.current;
        break;
      case scrollDirection.previous:
        transform.current += carouselWidth.current;
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
    <div className={`${styles.container}`}>
      <div ref={carouselRef} className={`${styles.list}`}>
        {reviews.map(({ content, rating, name, date, imgUrl }, i) => (
          <div
            key={i}
            className={`${styles.item}`}
            onClick={() => handleScroll(scrollDirection.next)}
          >
            <Review
              content={content}
              rating={rating}
              name={name}
              date={date}
              imgUrl={imgUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const reviews = [
  {
    rating: 4.8,
    name: "Thandeka Nkosi",
    content:
      "“I didn't expect such a speedy response. They helped me with everything I needed. I got the car I wanted in less than a week. Thank you!”",
    date: "25 Dec, 2021",
    imgUrl: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

export default Reviews;
