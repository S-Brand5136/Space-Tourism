import { useEffect, useState } from "react";
import { request } from "../helpers/request";

import "./styles/Crew.scss";

const Crew = () => {
  const [crewData, setCrewData] = useState([]);

  useEffect(() => {
    if (crewData.length <= 0) {
      request.get("crew").then((data) => {
        setCrewData(data);
      });
    }
  }, [crewData]);

  return <main className='crew'></main>;
};

export default Crew;
