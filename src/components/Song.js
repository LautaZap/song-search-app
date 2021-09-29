import React from "react";
import { Card } from "react-bootstrap";
var _ = require("lodash");

const Song = ({ lyrics, title }) => {
  return (
    <Card bg="dark" className="lyrics mb-2" text="white">
      <Card.Header>
        <h2>{_.capitalize(title)}</h2>
      </Card.Header>
      <Card.Body>
        <Card.Text style={{ whiteSpace: "pre-wrap" }}>{lyrics}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Song;
