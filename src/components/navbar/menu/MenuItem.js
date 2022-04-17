import React from "react";
import styles from "./menuItem.module.css";
import { CaretRight } from "phosphor-react";

const MenuItem = ({ name, Icon }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.title}`}>
        {/* <div className={`${styles.icon}`}>
            <Icon />
          </div> */}
        <div>{name}</div>
      </div>
      <div className={`${styles.rightCommands}`}>
        <div role="button" className={`${styles.button}`}>
          <CaretRight size={20} color="#ffffff" />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
