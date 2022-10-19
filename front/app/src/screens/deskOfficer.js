import React, {useState, useEffect} from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../API.js"
// import "../../css/workerPage.css"

const DeskOfficerView = () => {
  const [currentCustomer, setCurrentCustomer] = useState("");
  return (
    <Container>
        <Card>
            <Card.Title>Currently serving client: *******</Card.Title>
            <Card.Text>
                Currently serving : {currentCustomer}
            </Card.Text>
            <Button variant="primary" onClick={()=>action()}><span>Next Client</span></Button>
        </Card>
    </Container>
);

async function action (){
    const customer = await API.nextClient("Desk1");
    setCurrentCustomer(customer);
    }
}


export default DeskOfficerView;