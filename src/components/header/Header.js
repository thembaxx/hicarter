import React from "react";
import styles from "./header.module.css";

import Navbar from "../navbar/Navbar";
import SearchBar from "../searchbar/SearchBar";

const Header = () => {
  return (
    <div className={`${styles.container}`}>
      <Navbar />
      <SearchBar />
    </div>
  );
};

export default Header;
