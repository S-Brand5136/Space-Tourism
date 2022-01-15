import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import ButtonGroup from "../components/ButtonGroup";
import PageHeader from "../components/PageHeader";
import Text from "../components/Text";
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
              <div className='image-container'>
                <img
                  className='carousel-image'
                  src={process.env.PUBLIC_URL + `${item.images.png}`}
                  alt=''
                />
              </div>
              <section className='info-card'>
                <Text secondary secondaryHeading tag='h5'>
                  {item.role}
                </Text>
                <Text secondaryHeading heading tag='h3'>
                  {item.name}
                </Text>
                <Text className='mt-5'>{item.bio}</Text>
              </section>
            </Carousel.Item>
          );
        })}
        <div className='indicators'>
          <ButtonGroup
            rounded={true}
            itemArray={["", "", "", ""]}
            handler={carouselHandler}
          />
        </div>
      </Carousel>
    </main>
  );
};

export default Crew;
