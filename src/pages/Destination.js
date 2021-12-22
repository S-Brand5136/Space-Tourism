import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Carousel } from "react-bootstrap";
import { request } from "../helpers/request";
import "./Destination.scss";

const Destination = () => {
  return (
    <main className='destination'>
      <PageHeader number='01' title='Pick your destination' />
      <Carousel></Carousel>
    </main>
  );
};

export default Destination;
