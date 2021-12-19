import React from "react";
import NavItem from "./NavItem";

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

  return <ul className='navlist'>{navItems}</ul>;
};

export default NavList;
