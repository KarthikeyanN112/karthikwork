import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import BookCard from "./components/BookCard";

function App() {
  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center"> Apple store</h1>

      <Row className="justify-content-center">
        <Col md={4}>
          <BookCard title="iphone 17" space="256gb" price="49999" />
        </Col>
        <Col md={4}>
          <BookCard title="iphone 17pro" space="256gb" price="39999" />
        </Col>
        <Col md={4}>
          <BookCard title="iphone 17 air" space="256gb" price="29999" />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

























// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Container } from "react-bootstrap";

// function App() {
//   return (
//     <Container className="py-4">
//       <h1 className="mb-3">React-Bootstrap</h1>
//       <Button variant="success">Success</Button>
//     </Container>
//   );
// }

// export default App;
