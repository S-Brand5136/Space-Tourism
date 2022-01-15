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
