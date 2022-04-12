import React, { useEffect, useState } from "react";
import styles from "./searchBar.module.css";

import FilterPopover from "./filterPopover/FilterPopover";
const target = "searchbar";

const SearchBar = ({ toggleOverlay, overlayOpen, overlayTarget }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handlePopoverToggle = () => {
    setIsPopoverOpen((prev) => !prev);
    if (toggleOverlay) toggleOverlay(!isPopoverOpen, target);
  };

  useEffect(() => {
    if (overlayTarget === target) setIsPopoverOpen(overlayOpen);
  }, [overlayOpen, overlayTarget]);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.inner}`}>
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

          {/* Input */}
          <input
            className={`${styles.input}`}
            type="text"
            placeholder="Search brand, model etc."
            spellCheck={false}
          />

          {/* Filter button */}
          <div
            role="button"
            className={`${styles.button}`}
            onClick={handlePopoverToggle}
          >
            Filters
          </div>
        </div>

        {/* Popover */}
        {isPopoverOpen && (
          <div className={`${styles.popover}`}>
            <FilterPopover toggle={handlePopoverToggle} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
