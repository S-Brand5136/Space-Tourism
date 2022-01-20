import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import ButtonGroup from "../components/ButtonGroup";
import { Carousel } from "react-bootstrap";
import Text from "../components/Text";

import "./styles/Technology.scss";
import { request } from "../helpers/request";

const Technology = () => {
  const [data, setData] = useState([]);
  const labels = [<span>1</span>, <span>2</span>, <span>3</span>];
  const [itemNum, setItemNum] = useState(0);

  useEffect(() => {
    if (data.length <= 0) {
      request.get("technology").then((data) => {
        setData(data);
      });
    }
  }, [data]);

  const carouselHandler = (num) => {
    setItemNum(num);
  };

  return (
    <main className='tech'>
      <PageHeader number={"03"} title='space launch 101' />
      <Carousel
        interval={null}
        controls={false}
        indicators={false}
        activeIndex={itemNum}
      >
        {data.map((item) => {
          return (
            <Carousel.Item interval={null} key={item.name}>
              <div className='image-container'>
                <img
                  className='carousel-image'
                  src={process.env.PUBLIC_URL + `${item.images.landscape}`}
                  alt=''
                />
              </div>
              <section className='info-card'>
                <Text secondary secondaryHeading tag='h5'>
                  THE TERMINOLOGY…
                </Text>
                <Text secondaryHeading heading tag='h3'>
                  {item.name}
                </Text>
                <Text className='mt-5'>{item.description}</Text>
              </section>
            </Carousel.Item>
          );
        })}
        <div className='indicators'>
          <ButtonGroup
            tech
            rounded
            active={itemNum}
            itemArray={labels}
            handler={carouselHandler}
          />
        </div>
      </Carousel>
    </main>
  );
};

export default Technology;
