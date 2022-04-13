import React from "react";
import styles from "./stepsCard.module.css";

import Card from "../../../components/card/Card";
import Step from "./Step";

import ChooseCar from "./icons/ChooseCar";
import ApplyFinance from "./icons/ApplyFinance";
import GetCar from "./icons/GetCar";

const StepsCard = () => {
  return (
    <div className={`${styles.container}`}>
      <Card>
        <div className={`${styles.inner}`}>
          <div className={`${styles.heading}`}>
            Making buying a car fun, simple and easy.
          </div>
          <div className={`${styles.subheading}`}>
            All it takes is{" "}
            <b>
              Three <em>simple</em> steps
            </b>{" "}
            to get the car of your dreams in your hands and on the road.
          </div>
          <div>
            {steps.map(({ Img, title, subtitle }, i) => (
              <Step
                key={i}
                title={title}
                subtitle={subtitle}
                index={i + 1}
                Img={Img}
              />
            ))}
          </div>
          <div role="button" className={`${styles.button}`}>
            Find out more
          </div>
        </div>
      </Card>
    </div>
  );
};

const steps = [
  {
    title: "Choose your Vehicle",
    subtitle:
      "Pick your desired car and get a quote within less than a minute.",
    Img: ChooseCar,
  },
  {
    title: "Apply for Finance",
    subtitle:
      "We'll handle your entire finance application, easy, fast and seamless.",
    Img: ApplyFinance,
  },
  {
    title: "Get your car",
    subtitle:
      "Drive away smiling in your dream car, welcome to the Carter mafia.",
    Img: GetCar,
  },
];

export default StepsCard;
