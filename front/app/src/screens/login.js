import React, {useState, useEffect} from "react";
import { Col, Container, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";


const LoginView = () => {
    return(
      <Container fluid> 
          <h1> Welcome to the Desk Officer Page ! </h1>
          <Link to="/">Go back</Link>
      </Container>
    ); 
}

export default LoginView;