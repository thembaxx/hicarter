import React, { useEffect, useState } from "react";
import styles from "./tabs.module.css";

import TabPicker from "../tabPicker/TabPicker";
import Filters from "../filters/Filters";
import Popular from "./popular/Popular";

const Tabs = () => {
  const [tabs, setTabs] = useState([]);
  const [Tab, setTab] = useState(null);

  const handleTabPickerClick = (index) => {
    const t = Object.assign([], tabs);
    for (let i = 0; i < t.length; i++) {
      t[i].active = i === index;
    }

    setTab(tabs[index].Tab);
  };

  useEffect(() => {
    const t = Object.assign([], items);
    const tLength = t.length;

    for (let i = 0; i < tLength; i++) {
      t[i].active = i === 0;
    }

    setTabs(t);
    setTab(t[0].Tab);

    return () => {
      setTabs([]);
    };
  }, []);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.picker}`}>
        <TabPicker tabs={tabs} click={handleTabPickerClick} />
      </div>
      {Tab && <div className={`${styles.activeTab}`}>{Tab}</div>}
    </div>
  );
};

const items = [
  {
    name: "Popular",
    Tab: <Popular />,
  },
  {
    name: "Top results",
    Tab: null,
  },
  {
    name: "Filters",
    Tab: <Filters />,
  },
];

export default Tabs;
