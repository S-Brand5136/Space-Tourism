import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import "./Destination.scss";

const Destination = () => {
  return (
    <main className='destination'>
      <PageHeader number='01' title='Pick your destination' />
    </main>
  );
};

export default Destination;
