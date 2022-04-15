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
    <div>
      <Header title="Popular vehicles" action={{ name: "See all" }} />

      <div className={`${styles.list}`}>
        {items.map(({ name, iconUrl }, i) => (
          <div key={i} className={`${styles.item}`}>
            <div className={`${styles.info}`}>
              <div className={`${styles.icon}`}>
                <img src={iconUrl} alt={name} />
              </div>
              <span className={`${styles.name}`}>({name})</span>
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
    iconUrl: "/brands/bmw.png",
  },
  {
    name: "Ford",
    iconUrl: "/brands/ford.png",
  },
  {
    name: "Haval",
    iconUrl: "/brands/haval.png",
  },
  {
    name: "Hyundai",
    iconUrl: "/brands/hyundai.png",
  },
  {
    name: "Isuzu",
    iconUrl: "/brands/isuzu.png",
  },
  {
    name: "Kia",
    iconUrl: "/brands/kia.png",
  },
  {
    name: "Mitsubishi",
    iconUrl: "/brands/mitsubishi.png",
  },
  {
    name: "Nissan",
    iconUrl: "/brands/nissan.png",
  },
  {
    name: "Renault",
    iconUrl: "/brands/renault.png",
  },
  {
    name: "Toyota",
    iconUrl: "/brands/toyota.png",
  },
  {
    name: "Volkswagen",
    iconUrl: "/brands/volkswagen.png",
  },
];

export default Brands;
