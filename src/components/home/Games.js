import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { BASE_URL } from "../../constants/api";
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import GameCard from "../gameDetails/GameCard";

function Games() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(json => setGames(json.results))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="h-100 align-middle text-center"><Spinner animation="border" variant="primary" /></div>;
  }

  return (
    <>
      <Row>
        <CardGroup>
          {games.map(gameTitle => {
            const { id, name, background_image, rating, released } = gameTitle;

            return (
              <div key={id} className="col-md-4">
                <GameCard id={id} name={name} background_image={background_image} rating={rating} released={released} />
              </div>
            );
          })}
        </CardGroup>
      </Row>
    </>
  );
}

export default Games;