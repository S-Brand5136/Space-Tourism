import React from "react";
import classNames from "classnames";

import "./styles/Button.scss";

const Button = (props) => {
  let buttonClass = classNames("btn", {
    "btn--collapse": props.collapse,
    "btn--hidden": props.hidden,
  });

  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={buttonClass}
    >
      {props.children}
    </button>
  );
};

export default Button;
