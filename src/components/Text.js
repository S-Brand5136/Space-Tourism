import React from "react";
import classNames from "classnames";

import "./styles/Text.scss";

const Text = (props) => {
  let textClass = classNames("text", {
    "text--primary": props.primary,
    "text--secondary": props.secondary,
    "text--primary-heading": props.heading,
    "text--secondary-heading": props.secondaryHeading,
  });

  const CustomTag = props.tag || "p";

  return <CustomTag className={textClass}>{props.children}</CustomTag>;
};

export default Text;
