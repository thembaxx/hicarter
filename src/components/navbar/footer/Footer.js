import React from "react";
import styles from "./footer.module.css";

import TwitterIcon from "./icons/TwitterIcon";
import FacebookIcon from "./icons/FacebookIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

const Footer = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.contact}`}>
        <div className={`${styles.email}`}>hello@hicarter.co.za</div>
        <div>(012) 345-6789</div>
      </div>
      <div className={`${styles.social}`}>
        <div className={`${styles.socialAccounts}`}>
          <div className={`${styles.socialIcon}`}>
            <TwitterIcon />
          </div>
          <div className={`${styles.socialIcon}`}>
            <FacebookIcon />
          </div>
          <div className={`${styles.socialIcon}`}>
            <LinkedinIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
