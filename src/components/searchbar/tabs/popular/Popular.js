import React, { useEffect, useState } from "react";
import styles from "./popular.module.css";

import Header from "../header/Header";
import ChevRightIcon from "../../icons/ChevRightIcon";

const Popular = () => {
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
      <Header title="Popular vehicles" action={{ name: "See all" }} />

      <div className={`${styles.list}`}>
        {items.map(({ name, stock }, i) => (
          <div key={i} className={`${styles.item}`}>
            <div className={`${styles.info}`}>
              <span>{name}</span>
              <span className={`${styles.stock}`}>({stock})</span>
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
    name: "Volkswagen Polo",
    stock: 8,
  },
  {
    name: "Renault Kwid",
    stock: 12,
  },
  {
    name: "Hyundai Grand i10",
    stock: 3,
  },
  {
    name: "Kia Picanto",
    stock: 5,
  },
  {
    name: "Renault Kiger",
    stock: 11,
  },
];

export default Popular;
