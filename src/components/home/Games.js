import React, { useState, useEffect } from "react";
import { Spinner, Card, Button, CardColumns, CardDeck } from "react-bootstrap";
import { BASE_URL } from "../../constants/api";

function Games() {
/*  useEffect(function() {
    fetch(BASE_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.dir(json);
        })
        .catch(function(error) {
            console.log(error);
        });
}, []);

return null; */

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
    return <Spinner animation="border" variant="primary" />;
  }

  return (
    <>
      {games.map(gameTitle => (
        <Card key={gameTitle.id} className="card-container">
          <Card.Img variant="top" src={gameTitle.background_image} alt="GamePhoto" />
          <Card.Body>
            <Card.Title className="display-4">{gameTitle.name}</Card.Title>
            <Card.Text>{gameTitle.rating}</Card.Text>
            <Card.Text>{gameTitle.released}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Games;