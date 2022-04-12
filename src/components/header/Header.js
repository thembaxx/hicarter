import React, { useEffect, useRef, useState } from "react";
import styles from "./header.module.css";

import Navbar from "../navbar/Navbar";
import SearchBar from "../searchbar/SearchBar";

const Header = ({ toggleScroll }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const overlayTarget = useRef(null);

  const toggleOverlay = (show, target) => {
    overlayTarget.current = target;
    setIsOverlayOpen(show);
  };

  useEffect(() => {
    return () => {
      setIsOverlayOpen(false);
      overlayTarget.current = null;
    };
  }, []);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.inner}`}>
        <Navbar toggleScroll={toggleScroll} />
        <SearchBar
          toggleOverlay={toggleOverlay}
          overlayOpen={isOverlayOpen}
          overlayTarget={overlayTarget.current}
        />
      </div>

      {isOverlayOpen && (
        <div
          className={`${styles.overlay}`}
          onClick={() => setIsOverlayOpen((prev) => !prev)}
        ></div>
      )}
    </div>
  );
};

export default Header;
