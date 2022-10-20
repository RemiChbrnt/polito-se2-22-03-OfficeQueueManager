import React, { useState, useEffect } from "react";
import { Col, Container, Button, Row } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { SideBar } from './../components/sideBar';
import { Display } from "./display";

const HomeView = () => {
  const navigate = useNavigate();

  return (
    <Container fluid>
      <ul></ul>
      <Row>
        <h1>Home</h1>
      </Row>
      <ul></ul>
      <Row>
        <Col>
          <Container>
            <Row>
              <Button variant="white" size="lg" style={{backgroundColor: "#00706c"}} onClick={() => { navigate('/client') }}>
                <h3 className="text-white">Client</h3>
              </Button>
            </Row>
          </Container>
          <ul></ul>
          <Container>
            <Row>
              <Button variant="white" size="lg" style={{backgroundColor: "#00706c"}} onClick={() => { navigate('/desk-officer') }}>
              <h3 className="text-white">Desk Officer</h3>
              </Button>
            </Row>
          </Container>
        </Col>

        <Col>
          <Container>
            <Row>
              <Button variant="white" size="lg" style={{backgroundColor: "#00706c"}} onClick={() => { navigate('/admin') }}>
              <h3 className="text-white">Admin</h3>
              </Button>
            </Row>
          </Container>
          <ul></ul>
          <Container>
            <Row>
              <Button variant="white" size="lg" style={{backgroundColor: "#00706c"}} onClick={() => { navigate('/login') }}>
              <h3 className="text-white">Login</h3>
              </Button>
            </Row>
          </Container>
        </Col>
      </Row>
      <ul></ul>
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