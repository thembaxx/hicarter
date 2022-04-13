import React, { useRef, useEffect, useCallback } from "react";
import styles from "./reviews.module.css";

import Review from "./Review";
import ChevRight from "./icons/ChevRight";
import ChevLeft from "./icons/ChevLeft";

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
    <div className={`${styles.container}`}>
      <div className={`${styles.header}`}>
        <div className={`${styles.headline}`}>Client reviews</div>
        <p className={`${styles.subheading}`}>
          With Carter, you will get the best Service and advice that you deserve
        </p>
      </div>

      <div ref={carouselRef} className={`${styles.list}`}>
        {reviews.map(({ content, rating, name, date, imgUrl }, i) => (
          <div key={i} className={`${styles.item}`}>
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

const reviews = [
  {
    rating: 5,
    name: "Lady Bridget Akuffo",
    content:
      "“I didn't expect such a speedy response. They helped me with everything I needed. I got the car I wanted in less than a week. Thank you!”",
    date: "25 Dec, 2021",
    imgUrl: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    rating: 5,
    name: "Mapitse Tebogo",
    content:
      "I contacted hey carter just to shop around around, Noel Mafokate is the one that was assisting me. Well given his professional work and communication, I decided to stop shopping around and purchase the car I had interest in. He always kept me informed about every step, as the color I requested wasn't around gauteng, until I actually got my car. I would actually go through the process over and over again because of the hassle free service I received. Thanks Noel for the great service.",
    date: "25 Dec, 2021",
    imgUrl: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    rating: 4,
    name: "Thendo Bakali",
    content: "Very helpful, got my car within 7 days",
    date: "25 Dec, 2021",
    imgUrl: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    rating: 4.8,
    name: "Thabo Thandabantu",
    content:
      "Wonderful service and they are really passionate about their business",
    date: "25 Dec, 2021",
    imgUrl: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    rating: 4.8,
    name: "Johan Opperman",
    content:
      "Best customer service ever. Quick and reliable. Will definitely recommend them",
    date: "25 Dec, 2021",
    imgUrl: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    rating: 5,
    name: "Lebogang Vincent Orekeng",
    content:
      "TO Nicol and Carter i dntknow how to thank your for the joy you brought to my life. You the best....Keep that monementum Nicol and help other first timerslike myself.",
    date: "05 Mar, 2019",
    imgUrl: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    rating: 4.8,
    name: "Nobuhle Ntuli ",
    content:
      "Thank you so much for the beautiful service guys. Jabulani Xaba Big up's to you guys and the rest of the team. Ya'll are doing a great job. I will definitely come back one day for my second car.??",
    date: "25 Dec, 2021",
    imgUrl: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    rating: 5,
    name: "Anelisa Tuswa",
    content:
      "Mark is a super star. Very patient, assisted with getting best deal + best insurance. I'd recommend this especially for first time buyers...",
    date: "27 June, 2018",
    imgUrl: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default Reviews;
