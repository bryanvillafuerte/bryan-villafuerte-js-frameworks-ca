import React, { useState, useEffect } from "react";
import { Spinner, Card, Button, } from "react-bootstrap";
import { BASE_URL } from "../../constants/api";

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
    return <Spinner animation="border" variant="primary" />;
  }

  return (
    <>
      {games.map(gameTitle => (
        <div key={gameTitle.id} className="col-md-4">
          <Card className="bg-dark text-light h-100">
            <Card.Img variant="top" src={gameTitle.background_image} alt="GamePhoto" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end">
              <div className="overlay-container">
                <Card.Title>{gameTitle.name}</Card.Title>
                <Card.Text>Rating: {gameTitle.rating}</Card.Text>
                <Card.Text>Release Date: {gameTitle.released}</Card.Text>
                <Button variant="primary">Game Details</Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
      ))}
    </>
  );
}

export default Games;