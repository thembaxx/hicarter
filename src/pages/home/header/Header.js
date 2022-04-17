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
        <div role="button" className={`${styles.dropdown}`}>
          <div>
            <span style={{ marginRight: 4 }}>Choose Brand</span>
            <span style={{ opacity: 0.67, fontWeight: 400 }}>
              (BMW, Renault, Toyota etc.)
            </span>
          </div>
          <CaretDown size={18} />
        </div>
        <div role="button" className={`${styles.dropdown}`}>
          <div>Choose Model</div>
          <CaretDown size={18} />
        </div>
        <div role="button" className={`${styles.button}`}>
          <Plus color="white" weight="bold" size={16} />
          <div style={{ marginLeft: 10 }}>More filters</div>
        </div>
        <div className={`${styles.submit}`}>
          <div>
            Browse <b>12, 234</b> vehicles
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
