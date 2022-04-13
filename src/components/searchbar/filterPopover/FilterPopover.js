import React from "react";
import styles from "./filterPopover.module.css";

import FilterItem from "./FilterItem";
import FilterIcon from "../icons/FilterIcon";
import CarIcon from "../icons/CarIcon";
import WalletIcon from "../icons/WalletIcon";
import GaugeIcon from "../icons/GaugeIcon";
import MileageIcon from "../icons/MileageIcon";

const FilterPopover = () => {
  return (
    <div className={`${styles.container}`}>
      {/* Header */}
      <header className={`${styles.header}`}>
        <div className={`${styles.headerTitle}`}>
          <div role="button" className={`${styles.headerButton}`}>
            <div className={`${styles.headerIcon}`}>
              <FilterIcon />
            </div>
            <div>Filters</div>
          </div>
        </div>
        <div role="button" className={`${styles.clearButton}`}>
          Clear filters
        </div>
      </header>

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

export default FilterPopover;
