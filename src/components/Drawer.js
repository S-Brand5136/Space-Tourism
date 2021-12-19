import React from "react";
import { Offcanvas } from "react-bootstrap";
import Button from "./Button";
import "./Drawer.scss";
import NavList from "./NavList";

const Drawer = (props) => {
  return (
    <>
      <Offcanvas
        className='drawer'
        show={props.show}
        onHide={props.close}
        placement='end'
      >
        <div className='bg--blur'></div>
        <Offcanvas.Header class='drawer--header'>
          <Button onClick={props.close}>
            <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21'>
              <g fill='#D0D6F9' fill-rule='evenodd'>
                <path d='M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z' />
                <path d='M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z' />
              </g>
            </svg>
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body className='drawer--body'>
          <NavList urls={props.urls} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Drawer;
