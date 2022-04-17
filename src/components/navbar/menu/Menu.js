import React from "react";
import styles from "./menu.module.css";
import {
  Car,
  House,
  Buildings,
  Wrench,
  Phone,
  Newspaper,
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
} from "phosphor-react";

import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className={`${styles.container}`}>
      {/* <div className={`${styles.hr2}`}></div> */}
      <div className={`${styles.list}`}>
        {menuItems.map(({ name, route, Icon, items }, i) => (
          <div key={i}>
            <MenuItem name={name} route={route} Icon={Icon} />
          </div>
        ))}
      </div>
      <div className={`${styles.contact}`}>
        <div>
          <div className={`${styles.social}`}>
            <FacebookLogo
              className={`${styles.sociaIcon}`}
              size={24}
              color="#ffffff"
              weight="fill"
            />
            <TwitterLogo
              className={`${styles.sociaIcon}`}
              size={24}
              color="#ffffff"
              weight="fill"
            />
            <LinkedinLogo
              className={`${styles.sociaIcon}`}
              size={24}
              color="#ffffff"
              weight="fill"
            />
          </div>
          <div>
            <a
              href="mailto:hello@heycarter.co.za"
              className={`${styles.email}`}
            >
              hello@heycarter.co.za
            </a>
          </div>
          <div>
            <a href="tel:+27100452682" className={`${styles.tel}`}>
              +27 (031) 045 2682
            </a>
          </div>
        </div>
        <div>
          <div className={`${styles.address}`}>
            65 Corlet Dr <br /> Johanessburg <br /> 2196
          </div>
        </div>
      </div>
    </div>
  );
};

const menuItems = [
  {
    name: "Home",
    route: "/",
    Icon: House,
  },
  {
    name: "Browse cars",
    route: "/",
    Icon: Car,
  },
  {
    name: "Our Dealerships",
    route: "/",
    Icon: Buildings,
  },
  {
    name: "Book a Service",
    route: "/",
    Icon: Wrench,
  },
  {
    name: "Get in touch",
    route: "/",
    Icon: Phone,
  },
  {
    name: "Blog",
    route: "/",
    Icon: Newspaper,
  },
];

export default Menu;
