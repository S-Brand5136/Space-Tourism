import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Text from "../components/Text";
import "./styles/Home.scss";
import "../components/styles/Button.scss";

const Home = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/destination");
  };

  return (
    <main className='home'>
      <article>
        <Text secondaryHeading secondary primary tag='h4'>
          So, you want to travel to
        </Text>
        <Text heading tag='h1'>
          Space
        </Text>
        <Text>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </Text>
      </article>
      <Button onClick={clickHandler} className='btn' explore>
        Explore
      </Button>
    </main>
  );
};

export default Home;
