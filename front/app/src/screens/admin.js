import React, {useState, useEffect} from "react";
import { Col, Container, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";


const AdminView = () => {
    return(
      <Container fluid> 
          <h1> Welcome to the Admin Page ! </h1>
          <Link to="/">Go Back</Link>
      </Container>
  
    ); 
}

export default AdminView;