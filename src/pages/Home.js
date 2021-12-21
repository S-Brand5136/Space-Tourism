import React from "react";
import Button from "../components/Button";
import "./Home.scss";
import "../components/styles/Button.scss";

const Home = () => {
  return (
    <main className='home'>
      <article>
        <h4>So, you want to travel to</h4>
        <h1>Space</h1>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </article>
      <Button className='btn' explore>
        Explore
      </Button>
    </main>
  );
};

export default Home;
