import React from "react";
import styles from "./footer.module.css";

import { LinkedinLogo, FacebookLogo, TwitterLogo } from "phosphor-react";

const Footer = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.socialNetworks}`}>
        <div className={`${styles.socialItem}`}>
          <FacebookLogo size={24} color="rgba(0,0,0,0.4)" weight="fill" />
        </div>
        <div className={`${styles.socialItem}`}>
          <LinkedinLogo size={24} color="rgba(0,0,0,0.4)" weight="fill" />
        </div>
        <div className={`${styles.socialItem}`}>
          <TwitterLogo size={24} color="rgba(0,0,0,0.4)" weight="fill" />
        </div>
      </div>
      <div className={`${styles.links}`}>
        <div className={`${styles.linksInner}`}>
          <a className={`${styles.link}`} href="/">
            About
          </a>
          <a className={`${styles.link}`} href="/">
            Contact Us
          </a>
          <a className={`${styles.link}`} href="/">
            FAQ
          </a>
          <a className={`${styles.link}`} href="/">
            Blog
          </a>
        </div>
        <div className={`${styles.linksInner}`}>
          <a className={`${styles.link}`} href="/">
            Privacy Policy
          </a>
          <a className={`${styles.link}`} href="/">
            Terms of Use
          </a>
        </div>
      </div>
      <div className={`${styles.copyright}`}>
        © 2022 HeyCarter Pty Ltd. All Rights Reserved
      </div>
      <div className={`${styles.registration}`}>
        HeyCarter Dealerships (Pty) Ltd is an Authorised Financial Services
        Provider. FSP: 51498
      </div>
    </div>
  );
};

export default Footer;
