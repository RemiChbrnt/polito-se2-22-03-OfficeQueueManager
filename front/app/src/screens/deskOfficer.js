import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";


const DeskOfficerView = () => {
  const navigate = useNavigate();
  return (
    <Container fluid>
      <ul></ul>
      <Row>
        <Col md={10}>
          <h1>Desk Officer</h1>
        </Col>
        <Col md={2}>
          <div className="d-grid gap-2">
            <Button variant="white" size="lg" style={{ backgroundColor: "#85CDCB" }} onClick={() => { navigate('/') }}><h4 className="text-white"> Home</h4></Button>
          </div>
        </Col>
      </Row>
      <ul></ul>
    </Container>

  );
}

export default DeskOfficerView;