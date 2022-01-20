import React, { useEffect } from "react";
import NavItem from "./NavItem";

import "./styles/NavList.scss";

const NavList = (props) => {
  const navItems = props.urls.map((item, index) => {
    return (
      <NavItem
        key={index}
        title={item.title}
        url={item.url}
        active={item.active}
        index={index}
      />
    );
  });

  return (
    <ul onClick={props.hide} className='navlist'>
      {navItems}
    </ul>
  );
};

export default NavList;
