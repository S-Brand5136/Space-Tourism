import React from "react";
import Button from "./Button";

import "./styles/ButtonGroup.scss";

const ButtonGroup = (props) => {
  return (
    <div className='btn-group'>
      {props.itemArray.map((text, index) => {
        return (
          <Button
            round={props.rounded}
            selected={props.active === index}
            tech={props.tech}
            indicator
            underline={props.underline}
            key={index}
            onClick={() => props.handler(index)}
          >
            {text}
          </Button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
