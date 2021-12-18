import React from "react";
import classNames from "classnames";

import "./Button.scss";

const Button = (props) => {
  let buttonClass = classNames("btn", {
    "btn--collapse": props.collapse,
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
