import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import API from "../API.js"
import { Link, useNavigate } from "react-router-dom";


const DeskOfficerView = () => {
  const navigate = useNavigate();

  const [currentCustomer, setCurrentCustomer] = useState("");

  async function action() {
    const customer = await API.nextClient("Desk1");
    setCurrentCustomer(customer);
  }

  return (
    <Container fluid>
      <ul></ul>
      <Row>
        <Col md={10}>
          <h1>Desk Officer</h1>
          <ul></ul>
          {/*<Card>
            <Card.Title>Currently serving client: *******</Card.Title>
            <Card.Text>
                Currently serving : {currentCustomer}
            </Card.Text>
            <Button variant="primary" onClick={()=>action()}><span>Next Client</span></Button>
          </Card>*/}
        </Col>
        <Col md={2}>
          <div className="d-grid gap-2">
            <Button variant="white" size="lg" style={{ backgroundColor: "#00706c" }} onClick={() => { navigate('/') }}><h4 className="text-white"> Home</h4></Button>
          </div>
        </Col>
      </Row>
      <ul></ul>
      <Row>
        <h2>Currently serving</h2>
        <ul></ul>
        {currentCustomer.length === 0 ?
          <p><b>No served Client. Press the button Next Client to serve a Client.</b></p>
          : <p><b>Ticket ID:</b> {currentCustomer}</p>
        }
        {console.log(currentCustomer.length)}
      </Row>

      <Row>
        <Col md={10}>
        </Col>
        <Col md={2}>
          <div className="d-grid gap-2">
            <Button variant="white" size="lg" style={{ backgroundColor: "#00706c" }} onClick={() => action()}><h4 className="text-white">Next Client</h4></Button>
          </div>
        </Col>
      </Row>
    </Container>

  );
}


export default DeskOfficerView;