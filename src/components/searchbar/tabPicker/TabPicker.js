import React, { useState, useEffect } from "react";
import styles from "./tabPicker.module.css";

const tabWidth = 96;

const TabPicker = ({ tabs, click }) => {
  const [transform, setTransform] = useState(0);

  const handleTabClick = (e, index) => {
    e.preventDefault();
    click(index);
    setTransform(tabWidth * index);
  };

  useEffect(() => {
    return () => {
      setTransform(0);
    };
  }, []);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.inner}`}>
        {tabs.map(({ name, active }, i) => (
          <div
            key={i}
            className={`${styles.tab} ${active ? `${styles.activeTab}` : ""}`}
            onClick={(e) => handleTabClick(e, i)}
          >
            {name}
          </div>
        ))}

        <div
          className={`${styles.activeTabIndicator}`}
          style={{ transform: `TranslateX(${transform}px)` }}
        ></div>
      </div>
    </div>
  );
};

export default TabPicker;
