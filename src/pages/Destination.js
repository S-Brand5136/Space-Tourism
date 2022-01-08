import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import ButtonGroup from "../components/ButtonGroup";
import { Carousel } from "react-bootstrap";
import { request } from "../helpers/request";
import "./Destination.scss";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [labels, setLabels] = useState([]);
  const [itemNum, setItemNum] = useState(0);

  useEffect(() => {
    if (destinations.length <= 0) {
      request.get("destinations").then((data) => {
        setDestinations(data);
        const labels = data.map((item) => item.name);
        setLabels(labels);
      });
    }
  }, [destinations, labels]);

  const carouselHandler = (num) => {
    setItemNum(num);
  };

  return (
    <main className='destination'>
      <PageHeader number={"01"} title='Pick your destination' />
      <Carousel
        interval={null}
        controls={false}
        indicators={false}
        activeIndex={itemNum}
      >
        {destinations.map((item) => {
          return (
            <Carousel.Item interval={null} key={item.name}>
              <img
                className='carousel-image'
                src={process.env.PUBLIC_URL + `${item.images.png}`}
                alt={item.name}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className='indicators'>
        <ButtonGroup itemArray={labels} handler={carouselHandler} />
      </div>
    </main>
  );
};

export default Destination;
