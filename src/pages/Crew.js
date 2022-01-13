import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import ButtonGroup from "../components/ButtonGroup";
import InfoCard from "../components/InfoCard";
import PageHeader from "../components/PageHeader";
import { request } from "../helpers/request";

import "./styles/Crew.scss";

const Crew = () => {
  const [crewData, setCrewData] = useState([]);
  const [itemNum, setItemNum] = useState(0);

  useEffect(() => {
    if (crewData.length <= 0) {
      request.get("crew").then((data) => {
        setCrewData(data);
      });
    }
  }, [crewData]);

  const carouselHandler = (num) => {
    setItemNum(num);
  };

  return (
    <main className='crew'>
      <PageHeader number={"02"} title='Meet your crew' />
      <Carousel
        interval={null}
        controls={false}
        indicators={false}
        activeIndex={itemNum}
      >
        {crewData.map((item) => {
          return (
            <Carousel.Item interval={null} key={item.name}>
              <img
                className='carousel-image'
                src={process.env.PUBLIC_URL + `${item.images.png}`}
                alt=''
              />
              <InfoCard item={item} />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className='indicators'>{/* <ButtonGroup /> */}</div>
    </main>
  );
};

export default Crew;
