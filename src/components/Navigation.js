import { useState } from "react";
import Button from "./Button";
import Drawer from "./Drawer";
import "./styles/Navigation.scss";
import NavList from "./NavList";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const pageUrls = [
    {
      url: "/",
      title: "Home",
    },
    {
      url: "/Crew",
      title: "Crew",
    },
    {
      url: "/Destination",
      title: "Destination",
    },
    {
      url: "/Technology",
      title: "Technology",
    },
  ];

  return (
    <nav className='navigation'>
      <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'>
        <g fill='none' fillRule='evenodd'>
          <circle cx='24' cy='24' r='24' fill='#FFF' />
          <path
            fill='#0B0D17'
            d='M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z'
          />
        </g>
      </svg>

      {window.innerWidth <= 428 ? (
        <>
          <Button onClick={handleShow} collapse hidden={show}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='21'>
              <g fill='#D0D6F9' fillRule='evenodd'>
                <path d='M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z' />
              </g>
            </svg>
          </Button>

          <Drawer urls={pageUrls} show={show} close={handleClose} />
        </>
      ) : (
        <NavList className='nav' urls={pageUrls}></NavList>
      )}
    </nav>
  );
};

export default Navigation;
