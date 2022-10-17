import React, {useState, useEffect} from "react";
import { Col, Container, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";


const DeskOfficerView = () => {
    return(
      <Container fluid> 
          <h> Welcome to the Desk Officer Page ! </h>
          <Link to="/">Go back</Link>
      </Container>
  
    ); 
}

export default DeskOfficerView;