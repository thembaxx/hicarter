import React from "react";
import styles from "./header.module.css";
import { Plus, CaretDown } from "phosphor-react";

const Header = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.heading}`}>
        Find the right car for your needs
      </div>
      <form>
        <button className={`${styles.dropdown}`}>
          <div>Make</div>
          <CaretDown size={18} weight="bold" />
        </button>
        <button disabled={true} className={`${styles.dropdown}`}>
          <div>Choose model</div>
          <CaretDown size={18} weight="bold" />
        </button>
        <div role="button" className={`${styles.button}`}>
          <Plus color="white" weight="bold" size={16} />
          <div style={{ marginLeft: 10 }}>More filters</div>
        </div>
        <div className={`${styles.submit}`}>
          <div>12, 234 Offers</div>
        </div>
      </form>
    </div>
  );
};

export default Header;
