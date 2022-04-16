import React, { useEffect, useState } from "react";
import styles from "./brands.module.css";

import Header from "../header/Header";
import ChevRightIcon from "../../icons/ChevRightIcon";

const Brands = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = () => {
      // get data from api
      const response = [...fakeData];
      setItems(response);
    };

    getData();
    return () => {
      setItems([]);
    };
  }, []);

  return (
    <div className={`${styles.container}`}>
      <Header title="Popular vehicles" action={{ name: "View all " }} />

      <div className={`${styles.list}`}>
        {items.map(({ name, iconUrl }, i) => (
          <div key={i} className={`${styles.item}`}>
            <div className={`${styles.info}`}>
              <div className={`${styles.icon}`}>
                <img src={iconUrl} alt={name} />
              </div>
              <span className={`${styles.name}`}>{name}</span>
            </div>
            <div role="button">
              <ChevRightIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const fakeData = [
  {
    name: "BMW",
    iconUrl: "/brands/bmw.svg",
  },
  {
    name: "Ford",
    iconUrl: "/brands/ford.svg",
  },
  {
    name: "Hyundai",
    iconUrl: "/brands/hyundai.svg",
  },
  {
    name: "Isuzu",
    iconUrl: "/brands/isuzu.svg",
  },
  {
    name: "Kia",
    iconUrl: "/brands/kia.svg",
  },
  {
    name: "Mercedes",
    iconUrl: "/brands/mercedes.svg",
  },
  {
    name: "Mitsubishi",
    iconUrl: "/brands/mitsubishi.svg",
  },
  {
    name: "Nissan",
    iconUrl: "/brands/nissan.svg",
  },
  {
    name: "Renault",
    iconUrl: "/brands/renault.svg",
  },
  {
    name: "Toyota",
    iconUrl: "/brands/toyota.svg",
  },
  {
    name: "Volkswagen",
    iconUrl: "/brands/volkswagen.svg",
  },
];

export default Brands;
