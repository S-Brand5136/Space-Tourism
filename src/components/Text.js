import React from "react";
import classNames from "classnames";

import "./styles/Text.scss";

const Text = (props) => {
  let textClass = classNames("text", {});
  const CustomTag = props.tag || "p";

  return <CustomTag className={textClass}>{props.children}</CustomTag>;
};

export default Text;
