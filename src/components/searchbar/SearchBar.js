import React from "react";
import styles from "./searchBar.module.css";

const SearchBar = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.inputWrapper}`}>
        <div role="button" className={`${styles.lblButton}`}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6667 12.6667L15.6667 15.6667"
              stroke="#B3B3B3"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
            <path
              d="M9 14C11.7614 14 14 11.7614 14 9C14 6.23858 11.7614 4 9 4C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14Z"
              stroke="#B3B3B3"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </div>
        <input
          className={`${styles.input}`}
          type="text"
          placeholder="Search"
          spellCheck={false}
        />
        <div role="button" className={`${styles.button}`}>
          Find cars
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
