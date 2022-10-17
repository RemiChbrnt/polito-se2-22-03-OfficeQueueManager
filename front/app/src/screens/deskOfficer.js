import React, {useState, useEffect} from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../API.js"
// import "../../css/workerPage.css"

const DeskOfficerView = () => {
  return (
    <Container>
        <Card>
            <Card.Title>Currently serving client: *******</Card.Title>
            <Card.Text>
                Lorem Ipsum
            </Card.Text>
            <Button variant="primary" onClick={()=>action()}><span>Next Client</span></Button>
        </Card>
    </Container>
);
}
function action(){
API.nextClient();
}

export default DeskOfficerView;