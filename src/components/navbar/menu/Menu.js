import React from "react";
import styles from "./menu.module.css";

import CarIcon from "../icons/CarIcon";
import LocationIcon from "../icons/LocationIcon";
import CarServiceIcon from "../icons/CarServiceIcon";
import PhoneIcon from "../icons/PhoneIcon";
import BlogIcon from "../icons/BlogIcon";

import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.hr2}`}></div>
      <div className={`${styles.list}`}>
        {menuItems.map(({ name, route, Icon, items }, i) => (
          <div key={i}>
            <MenuItem name={name} route={route} Icon={Icon} subItems={items} />
          </div>
        ))}
      </div>
    </div>
  );
};

const menuItems = [
  {
    name: "Vehicles",
    route: "/",
    Icon: CarIcon,
    items: [
      {
        name: "Popular",
        route: "/",
      },
      {
        name: "New cars",
        route: "/",
      },
      {
        name: "Used cars",
        route: "/",
      },
      {
        name: "Newest stock",
        route: "/",
      },
      {
        name: "Oldest stock",
        route: "/",
      },
      {
        name: "Brands",
        route: "/",
      },
    ],
  },
  {
    name: "Locate Dealerships",
    route: "/",
    Icon: LocationIcon,
    items: [
      {
        name: "Mitsubishi dealerships",
        route: "/",
      },
      {
        name: "Renault dealerships",
        route: "/",
      },
    ],
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
