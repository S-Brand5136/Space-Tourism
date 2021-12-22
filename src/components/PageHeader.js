import React from "react";
import "./styles/PageHeader.scss";

const PageHeader = ({ title, number }) => {
  return (
    <header>
      <h3>
        <span>{number}</span>
        {title}
      </h3>
    </header>
  );
};

export default PageHeader;
