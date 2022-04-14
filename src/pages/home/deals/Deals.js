import React, { useEffect, useState } from "react";
import styles from "./deals.module.css";

import Carousel from "../../../components/carousel/Carousel";

const Deals = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const getData = () => {
      const _items = items.map(
        ({
          brand,
          condition,
          year,
          model,
          transmission,
          fuelType,
          installment,
          price,
        }) => (
          <div className={`${styles.item}`}>
            <div className={`${styles.imageWrapper}`}>
              <div className={`${styles.condition}`}>
                <div className={`${styles.conditionInner}`}>
                  <svg
                    width="85"
                    height="85"
                    viewBox="0 0 85 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M85 85L0 0H85V85Z" fill="var(--primary-color)" />
                  </svg>

                  <div className={`${styles.conditionContent}`}>
                    {condition}
                  </div>
                </div>
              </div>
              <div className={`${styles.tags}`}>
                <div className={`${styles.tag}`}>{transmission}</div>
                <div className={`${styles.tag}`}>{fuelType}</div>
              </div>
            </div>
            <div className={`${styles.details}`}>
              <div className={`${styles.brand}`}>{brand}</div>
              <div className={`${styles.model}`}>
                <span>{year}</span>
                <span className={`${styles.vl}`}>|</span>
                <span>{model}</span>
              </div>
              <div className={`${styles.hl}`}></div>
              <div className={`${styles.cost}`}>
                <span style={{ opacity: 0.67, marginRight: 4 }}>from</span>
                <span>
                  <b>
                    {`${installment.toLocaleString("en-ZA", {
                      style: "currency",
                      currency: "ZAR",
                    })} pm*`}
                  </b>
                </span>
                <span style={{ marginLeft: 4 }}>
                  {`or ${price.toLocaleString("en-ZA", {
                    style: "currency",
                    currency: "ZAR",
                  })}`}
                </span>
              </div>
              <div role="button" className={`${styles.button}`}>
                view offer
              </div>
            </div>
          </div>
        )
      );
      setDeals(_items);
    };

    getData();

    return () => {
      setDeals([]);
    };
  }, []);

  return (
    <div className={`${styles.container}`}>
      <Carousel items={deals} />
    </div>
  );
};

const items = [
  {
    condition: "new",
    brand: "Renault",
    year: 2022,
    model: "1.0 Expression",
    transmission: "manual",
    fuelType: "Petrol",
    installment: 2899,
    price: 193400,
  },
  {
    condition: "new",
    brand: "Renault",
    year: 2022,
    model: "1.0 Expression",
    transmission: "manual",
    fuelType: "petrol",
    installment: 2199,
    price: 170400,
  },
  {
    condition: "new",
    brand: "Renault",
    year: 2022,
    model: "1.0 Life",
    transmission: "manual",
    fuelType: "petrol",
    installment: 3099,
    price: 204900,
  },
  {
    condition: "new",
    brand: "Mitsubishi",
    year: 2021,
    model: "Eclipse Cross 2.0 GLS",
    transmission: "automatic",
    fuelType: "petrol",
    installment: 5409,
    price: 471995,
  },
  {
    condition: "new",
    brand: "Mitsubishi",
    year: 2022,
    model: "ASX 2.0 ES",
    transmission: "manual",
    fuelType: "petrol",
    installment: 4297,
    price: 371995,
  },
];

export default Deals;
