import React from 'react';
import Heading from "../Heading";
import Games from "./Games";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';

function Home() {
  return (
    <>
      <Heading title="Games List" />
      <Container>
        <Row>
          <CardGroup>
            <Games />
          </CardGroup>
        </Row>
      </Container>
    </>
  );
}

export default Home;