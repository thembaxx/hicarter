import React, { useEffect, useState } from "react";
import styles from "./searchBar.module.css";

import FilterPopover from "./filterPopover/FilterPopover";
import BackIcon from "./icons/BackIcon";

const SearchBar = ({ inputFocusChanged }) => {
  const [query, setQuery] = useState("");
  const [showPanel, setShowPanel] = useState(false);

  const handleCloseClick = () => {
    setShowPanel(false);
    inputFocusChanged(false, true);
  };

  const handleInputChange = (e) => {
    const value = e.currentTarget.value;
    setQuery(value);
  };

  const handleInputFocusChange = (event) => {
    event.preventDefault();

    const isFocused = event.type === "focus" ? true : false;
    if (isFocused) {
      inputFocusChanged(isFocused, true);
      setShowPanel(true);
    }
  };

  useEffect(() => {
    return () => {
      setQuery("");
      setShowPanel(false);
    };
  }, []);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.inner}`}>
        {showPanel && (
          <div
            role="button"
            className={`${styles.backButton}`}
            onClick={handleCloseClick}
          >
            <BackIcon />
          </div>
        )}

        <div className={`${styles.inputWrapper}`}>
          {/* Input */}
          <form className={`${styles.form}`}>
            <lbl htmlFor="search" className={`${styles.lblButton}`}>
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
            </lbl>
            <input
              id="search"
              className={`${styles.input}`}
              type="text"
              onChange={handleInputChange}
              value={query}
              onFocus={handleInputFocusChange}
              onBlur={handleInputFocusChange}
              placeholder="Search brand, model etc."
              spellCheck={false}
              autoComplete="off"
            />
          </form>

          {/* search button */}
          <div role="button" className={`${styles.button}`}>
            Search
          </div>
        </div>
      </div>
      <div
        className={`${styles.panel}`}
        style={{
          opacity: showPanel ? 1 : 0,
          transform: showPanel ? `translateY(0)` : `translateY(100%)`,
        }}
      >
        <div className={`${styles.filters}`}>
          <FilterPopover />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
