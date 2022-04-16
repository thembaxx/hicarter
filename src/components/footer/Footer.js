import React from "react";
import styles from "./footer.module.css";

import { LinkedinLogo, FacebookLogo, TwitterLogo } from "phosphor-react";

const Footer = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.socialNetworks}`}>
        <div className={`${styles.socialItem}`}>
          <FacebookLogo size={24} color="var(--black-200)" weight="fill" />
        </div>
        <div className={`${styles.socialItem}`}>
          <LinkedinLogo size={24} color="var(--black-200)" weight="fill" />
        </div>
        <div className={`${styles.socialItem}`}>
          <TwitterLogo size={24} color="var(--black-200)" weight="fill" />
        </div>
      </div>
      <div className={`${styles.links}`}>
        <a className={`${styles.link}`} href="#">
          privacy policy
        </a>
        <a className={`${styles.link}`} href="#">
          terms of use
        </a>
        <a className={`${styles.link}`} href="#">
          faqs
        </a>
        <a className={`${styles.link}`} href="#">
          blog
        </a>
      </div>
      <div className={`${styles.copyright}`}>Copyright 2022 HeyCarter Pty Ltd | All Rights Reserved | HeyCarter Dealerships (Pty) Ltd is an Authorised Financial Services Provider. FSP: 51498</div>
    </div>
  );
};

export default Footer;
