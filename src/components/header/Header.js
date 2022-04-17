import React, { useState } from "react";
import styles from "./header.module.css";

import Navbar from "../navbar/Navbar";
import SearchBar from "../searchbar/SearchBar";

const Header = () => {
  const [hideNav, setHideNav] = useState(false);

  const inputFocusChanged = (isFocused, toggle) => {
    if (isFocused && toggle) {
      setHideNav(true);
    } else if (!isFocused && toggle) {
      setHideNav(false);
    }
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.inner}`}>
        <div
          className={`${styles.nav}`}
          style={{
            opacity: hideNav ? 0 : 1,
            height: hideNav ? 0 : 64,
          }}
        >
          <Navbar />
        </div>
        <SearchBar inputFocusChanged={inputFocusChanged} />
      </div>
    </div>
  );
};

export default Header;
