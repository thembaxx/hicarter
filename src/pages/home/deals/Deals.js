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
          imgUrl,
          installment,
          price,
        }) => (
          <div className={`${styles.item}`}>
            <div className={`${styles.imageWrapper}`}>
              <img className={`${styles.img}`} src={imgUrl} alt={brand} />
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
    brand: "bmw",
    year: 2021,
    model: "sDrive18i Sport",
    transmission: "Automatic",
    fuelType: "Petrol",
    installment: 12889,
    price: 708886,
    imgUrl: "/images/bmw_x2.png",
  },
  {
    condition: "new",
    brand: "Mitsubishi",
    year: 2020,
    model: "Triton 2.4DI-D double Cab GL",
    transmission: "Manual",
    fuelType: "Diesel",
    installment: 5511,
    price: 480995,
    imgUrl: "/images/Mitsubishi_triton.png",
  },
  {
    condition: "new",
    brand: "bmw",
    year: 2022,
    model: "sDrive18d",
    transmission: "Automatic",
    fuelType: "Diesel",
    installment: 16295,
    price: 896224,
    imgUrl: "/images/bmw_x3.png",
  },
  {
    condition: "new",
    brand: "Renault",
    year: 2021,
    model: "Triber 1.0 Expression",
    transmission: "Manual",
    fuelType: "Petrol",
    installment: 2899,
    price: 193400,
    imgUrl: "/images/renault_triber_600vw.png",
  },
  {
    condition: "new",
    brand: "Haval",
    year: 2021,
    model: "Julion 2.5T City",
    transmission: "Manual",
    fuelType: "Petrol",
    installment: 5780,
    price: 317900,
    imgUrl: "/images/Haval Julion - 600vw.png",
  },
  {
    condition: "new",
    brand: "Mitsubishi",
    year: 2021,
    model: "Eclipse Cross 2.0 GLS",
    transmission: "Automatic",
    fuelType: "Petrol",
    installment: 5409,
    price: 471995,
    imgUrl: "/images/Mitsubishi_eclipse_cross.png",
  },
];

export default Deals;
