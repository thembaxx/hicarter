import React from "react";
import styles from "./footer.module.css";

import {
  LinkedinLogo,
  FacebookLogo,
  TwitterLogo,
  MapPin,
  Phone,
} from "phosphor-react";

const Footer = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.socialNetworks}`}>
        <div className={`${styles.socialItem}`}>
          <FacebookLogo size={24} weight="fill" />
        </div>
        <div className={`${styles.socialItem}`}>
          <LinkedinLogo size={24} weight="fill" />
        </div>
        <div className={`${styles.socialItem}`}>
          <TwitterLogo size={24} weight="fill" />
        </div>
      </div>
      <div className={`${styles.links}`}>
        <div className={`${styles.linksInner}`}>
          <a className={`${styles.link}`} href="/">
            About
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
      <div className={`${styles.contact}`}>
        <a className={`${styles.email}`} href="mailto:hello@heycarter.co.za">
          hello@heycarter.co.za
        </a>
        <div className={`${styles.dealerships}`}>
          <div>
            <div style={{ marginBottom: 12 }}>
              <b>Johannesburg</b>
            </div>
            <div className={`${styles.meta}`}>
              <div>
                <MapPin size={16} style={{ marginTop: 2 }} />
              </div>
              <div style={{ marginLeft: 8 }}>
                65 Corlett Drive <br /> Birnam
              </div>
            </div>
            <div className={`${styles.meta}`}>
              <div>
                <Phone size={16} style={{ marginTop: 2 }} />
              </div>
              <a href="tel:+27100452682" style={{ marginLeft: 8 }}>
                +27 (010) 045 2682
              </a>
            </div>
          </div>
          <br />
          <br />
          <div>
            <div style={{ marginBottom: 12 }}>
              <b>Durban</b>
            </div>
            <div className={`${styles.meta}`}>
              <div>
                <MapPin size={16} style={{ marginTop: 2 }} />
              </div>
              <div style={{ marginLeft: 8 }}>
                1 Intersite Avenue <br /> Springfield Park
              </div>
            </div>
            <div className={`${styles.meta}`}>
              <div>
                <Phone size={16} style={{ marginTop: 2 }} />
              </div>
              <a href="tel:+27310450500" style={{ marginLeft: 8 }}>
                +27 (031) 045 0500
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.copyright}`}>© 2022 HeyCarter Pty Ltd.</div>
      <div className={`${styles.registration}`}>
        HeyCarter Dealerships (Pty) Ltd is an Authorised Financial Services
        Provider. FSP: 51498
      </div>
    </div>
  );
};

export default Footer;
