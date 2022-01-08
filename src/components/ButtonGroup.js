import React from "react";
import Button from "./Button";

import "./styles/ButtonGroup.scss";

const ButtonGroup = (props) => {
  return (
    <div className='btn-group'>
      {props.itemArray.map((text, index) => {
        return (
          <Button
            indicator
            underline
            key={text}
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
