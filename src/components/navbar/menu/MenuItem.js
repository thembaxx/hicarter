import React, { useState } from "react";
import styles from "./menuItem.module.css";

import ChevRightIcon from "../icons/ChevRightIcon";
import PlusIcon from "../icons/PlusIcon";
import DashIcon from "../icons/DashIcon";

const MenuItem = ({ name, Icon, subItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggleClick = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.inner}`}>
        <div className={`${styles.title}`}>
          <div className={`${styles.icon}`}>
            <Icon />
          </div>
          <div>{name}</div>
        </div>
        <div className={`${styles.rightCommands}`}>
          {/* Chev right button */}
          {!subItems && (
            <div role="button" className={`${styles.button}`}>
              <ChevRightIcon />
            </div>
          )}

          {/* expansion buttons */}
          {subItems && (
            <div className={`${styles.button}`}>
              {!isExpanded && (
                <div
                  role="button"
                  className={`${styles.button}`}
                  onClick={handleExpandToggleClick}
                >
                  <PlusIcon />
                </div>
              )}
              {isExpanded && (
                <div
                  role="button"
                  className={`${styles.button}`}
                  onClick={handleExpandToggleClick}
                >
                  <DashIcon />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Submenu */}
      {isExpanded && (
        <div className={`${styles.submenu}`}>
          {subItems?.map(({ name }) => (
            <div className={`${styles.subItem}`}>
              <div>{name}</div>
              <div role="button" className={`${styles.button}`}>
                <ChevRightIcon />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
