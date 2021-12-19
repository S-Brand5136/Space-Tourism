import { Link } from "react-router-dom";
import classNames from "classnames";
import "./styles/NavItem.scss";

const NavItem = ({ active, url, title, index }) => {
  let navItemClass = classNames("navItem", {
    "navItem--active": active,
  });

  return (
    <li className={navItemClass}>
      {window.innerWidth <= 428 ? <span>0{index}</span> : ""}
      <Link to={url}>{title}</Link>
    </li>
  );
};

export default NavItem;
