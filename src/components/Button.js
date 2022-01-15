import React from "react";
import classNames from "classnames";

import "./styles/Button.scss";

const Button = (props) => {
  let buttonClass = classNames("button", {
    "button--collapse": props.collapse,
    "button--hidden": props.hidden,
    "button--explore": props.explore,
    "button--indicator": props.indicator,
    "button--indicator-round": props.round,
    "button--underline": props.underline,
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
