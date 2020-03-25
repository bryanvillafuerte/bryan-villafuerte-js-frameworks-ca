import React from 'react';
import Heading from "../Heading";
import Games from "./Games";

function Home() {
  return (
    <>
      <Heading title="Games List" />
      <Games />
    </>
  );
}

export default Home;