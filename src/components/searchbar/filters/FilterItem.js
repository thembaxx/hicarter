import React from "react";
import styles from "./filterItem.module.css";

import ChevIcon from "../icons/ChevIcon";

const FilterItem = ({ name, Icon }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.leftCommands}`}>
        <div className={`${styles.icon}`}>
          <Icon />
        </div>
        <div className={`${styles.name}`}>{name}</div>
      </div>
      <div role="button">
        <ChevIcon />
      </div>
    </div>
  );
};

export default FilterItem;
