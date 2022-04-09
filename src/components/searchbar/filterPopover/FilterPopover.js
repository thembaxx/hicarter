import React from "react";
import styles from "./filterPopover.module.css";

import FilterItem from "./FilterItem";
import FilterIcon from "../icons/FilterIcon";
import CarIcon from "../icons/CarIcon";
import WalletIcon from "../icons/WalletIcon";
import GaugeIcon from "../icons/GaugeIcon";
import MileageIcon from "../icons/MileageIcon";

const FilterPopover = ({ toggle }) => {
  return (
    <div>
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

      {/* Matches */}
      <div className={`${styles.matches}`}>
        <span>
          <b>127</b> matching results found
        </span>
      </div>

      {/* Actions */}
      <div className={`${styles.actions}`}>
        <div
          role="button"
          className={`${styles.secondaryAction}`}
          onClick={toggle}
        >
          Cancel
        </div>
        <div style={{ width: 10 }}></div>
        <div role="button" className={`${styles.primaryAction}`}>
          See cars
        </div>
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
