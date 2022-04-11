import React, { useEffect, useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./navbar.module.css";

import Menu from "./menu/Menu";
import ChatIcon from "./icons/ChatIcon";
import MenuIcon from "./icons/MenuIcon";
import CloseIcon from "./icons/CloseIcon";

const target = "navbar";

const Navbar = ({ toggleOverlay, overlayOpen, overlayTarget }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuAnimation = useSpring({
    onStart: () => {
      if (menuRef.current) {
        const display = isMenuOpen ? "block" : "none";
        menuRef.current.style.display = display;
      }
    },
    onRest: () => {
      if (menuRef.current) {
        const display = isMenuOpen ? "block" : "none";

        menuRef.current.style.display = display;
      }
    },
    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen ? `translateY(0)` : `translateY(-40px)`,
  });

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
    if (toggleOverlay) toggleOverlay(!isMenuOpen, target);
  };

  useEffect(() => {
    if (overlayTarget === target) setIsMenuOpen(overlayOpen);
  }, [overlayOpen, overlayTarget]);

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
        {/* Chat icon */}
        {!isMenuOpen && (
          <div className={`${styles.button}`} role="button">
            <div className={`${styles.chat}`}>
              <ChatIcon />
            </div>
          </div>
        )}
        {!isMenuOpen && <div className={`${styles.vl}`}></div>}

        {/* Hamburgur menu */}
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

      <animated.div
        ref={menuRef}
        className={`${styles.menu}`}
        style={menuAnimation}
      >
        <Menu />
      </animated.div>
      {/* Nav menu */}
      {/*isMenuOpen && (
        <div className={`${styles.menu}`}>
          <Menu />
        </div>
      )*/}
    </div>
  );
};

export default Navbar;
