import React from "react";
import styles from "./header.module.css";

const Header = ({ title, action }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.title}`}>{title}</div>
      {action && (
        <div role="button" className={`${styles.button}`}>
          {action?.name}
        </div>
      )}
    </div>
  );
};

export default Header;
