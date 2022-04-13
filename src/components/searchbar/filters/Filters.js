import React from "react";
import styles from "./filters.module.css";

import Header from "../tabs/header/Header";
import FilterItem from "./FilterItem";
import CarIcon from "../icons/CarIcon";
import WalletIcon from "../icons/WalletIcon";
import GaugeIcon from "../icons/GaugeIcon";
import MileageIcon from "../icons/MileageIcon";

const Filters = () => {
  return (
    <div className={`${styles.container}`}>
      <Header title="Filters" action={{ name: "Clear filters" }} />

      {/* List */}
      <div className={`${styles.list}`}>
        {filterItems.map(({ name, Icon }, i) => (
          <FilterItem key={i} name={name} Icon={Icon} />
        ))}
      </div>
    </div>
  );
};

const filterItems = [
  {
    name: "Condition",
    Icon: CarIcon,
  },
  {
    name: "Price",
    Icon: WalletIcon,
  },
  {
    name: "Transmission",
    Icon: GaugeIcon,
  },
  {
    name: "Mileage",
    Icon: MileageIcon,
  },
];

export default Filters;
