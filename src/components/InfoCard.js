import React from "react";
import Text from "./Text";

import "./styles/InfoCard.scss";

const InfoCard = (props) => {
  return (
    <section className='info-card'>
      <div className='top'>
        <Text tag='h1' heading>
          {props.item.name}
        </Text>
        <Text>{props.item.description}</Text>
      </div>
      <div className='bottom'>
        <div>
          <Text secondaryHeading tag='h6'>
            AVG. DISTANCE
          </Text>
          <Text primary tag='h3'>
            {props.item.distance}
          </Text>
        </div>
        <div>
          <Text secondaryHeading tag='h6'>
            EST. TRAVEL TIME
          </Text>
          <Text primary tag='h3'>
            {props.item.travel}
          </Text>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
