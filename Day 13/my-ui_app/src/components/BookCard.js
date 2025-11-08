import React from "react";
import { Card, Button } from "react-bootstrap";

function BookCard({ title, space, price }) {
  return (
    <Card className="mb-3 shadow-sm" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{space}</Card.Subtitle>
        <Card.Text>Price: ₹{price}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
