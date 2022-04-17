import React from "react";
import styles from "./menu.module.css";
import { Car } from "phosphor-react";

// import CarIcon from "../icons/CarIcon";
import LocationIcon from "../icons/LocationIcon";
import CarServiceIcon from "../icons/CarServiceIcon";
import PhoneIcon from "../icons/PhoneIcon";
import BlogIcon from "../icons/BlogIcon";

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
    </div>
  );
};

const menuItems = [
  {
    name: "Browse cars",
    route: "/",
    // Icon: CarIcon,
    Icon: Car,
  },
  {
    name: "Our Dealerships",
    route: "/",
    Icon: LocationIcon,
  },
  {
    name: "Book a Service",
    route: "/",
    Icon: CarServiceIcon,
  },
  {
    name: "Get in touch",
    route: "/",
    Icon: PhoneIcon,
  },
  {
    name: "Blog",
    route: "/",
    Icon: BlogIcon,
  },
];

export default Menu;
