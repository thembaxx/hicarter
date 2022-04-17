import React, { useState } from "react";
import styles from "./navbar.module.css";

import Menu from "./menu/Menu";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={`${styles.container}`}>
      {/* Left commands */}
      <div className={`${styles.leftCommands}`}>
        <div className={`${styles.button}`} role="button">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="3" fill="white" />
            <path
              d="M17 14.4375V18.5H7V5.5H17V7"
              stroke="#273fa0"
              stroke-width="3"
            />
            <path d="M17 8V10" stroke="#FF6701" stroke-width="3" />
          </svg>
        </div>
        <h4 className={`${styles.title}`}>
          hicarter<span style={{ color: "var(--secondary-color)" }}>!</span>
        </h4>
      </div>

      {/* Right commands */}
      <div className={`${styles.rightCommands}`}>
        {!isMenuOpen && (
          <div
            className={`${styles.button}`}
            role="button"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </div>
        )}

        {/* Close menu icon */}
        {isMenuOpen && (
          <div
            className={`${styles.button}`}
            role="button"
            onClick={handleMenuClick}
          >
            <CloseIcon />
          </div>
        )}
      </div>

      <div
        className={`${styles.menu}`}
        style={{
          transform: isMenuOpen ? `translateY(0)` : `translateY(100%)`,
        }}
      >
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
