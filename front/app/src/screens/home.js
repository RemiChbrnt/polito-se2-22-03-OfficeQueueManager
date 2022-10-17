import React, { useState, useEffect } from "react";
import { Col, Container, Button, Row } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";


const HomeView = () => {
  const navigate = useNavigate();

  return (
    <Container fluid>
      <Row>
        <h1>Home</h1>
      </Row>
      <Row>
        <Col>
          <Container>
            <Row>
              <Button onClick={() => { navigate('/client') }} variant="secondary" size="lg">
                Client
              </Button>
            </Row>
          </Container>
          <ul></ul>
          <Container>
            <Row>
              <Button onClick={() => { navigate('/desk-officer') }} variant="secondary" size="lg">
                Desk Officer
              </Button>
            </Row>
          </Container>
        </Col>

        <Col>
          <Container>
            <Row>
              <Button onClick={() => { navigate('/admin') }} variant="secondary" size="lg">
                Admin
              </Button>
            </Row>
          </Container>
          <ul></ul>
          <Container>
            <Row>
              <Button onClick={() => { navigate('/login') }} variant="secondary" size="lg">
                Login
              </Button>
            </Row>
          </Container>
        </Col>

      </Row>
    </Container>
  );
}

const styles = {
  "container": {
    display: "flex",
    flexDirection: "column",
  }
}

export default HomeView;