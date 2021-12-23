import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Carousel } from "react-bootstrap";
import { request } from "../helpers/request";
import "./Destination.scss";

const Destination = () => {
  const [destinations, setDestinations] = useState(null);
  const [labels, setLabels] = useState(null);

  useEffect(() => {
    if (destinations === null) {
      request.get("destinations").then((data) => {
        setDestinations(data);
        const labels = data.map((item) => item.name);
        setLabels(labels);
      });
    }
  }, [destinations, labels]);

  return (
    <main className='destination'>
      <PageHeader number='01' title='Pick your destination' />
      <Carousel interval={null} controls={false}>
        {destinations ? (
          destinations.map((item) => {
            return (
              <Carousel.Item interval={null} key={item.name}>
                <img
                  className='carousel-image'
                  src={process.env.PUBLIC_URL + `${item.images.png}`}
                  alt={item.name}
                />
              </Carousel.Item>
            );
          })
        ) : (
          <></>
        )}
      </Carousel>
    </main>
  );
};

export default Destination;
