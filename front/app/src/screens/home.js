import React, {useState, useEffect} from "react";
import { Col, Container, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";


const HomeView = () => {
    return(
      <Container fluid> 
        <div style={styles.container}>
            <h1> Welcome to Queue Office Management ! </h1>
            <Link to="/client">Go to Client</Link>
            <Link to="/admin">Go to Admin</Link>
            <Link to="/desk-officer">Go to Desk Officer</Link>
            <Link to="/login">Go to login</Link>
        </div>
      </Container>
  
    ); 
}

const styles={
    "container":{
        display:"flex",
        flexDirection: "column",
    }
}

export default HomeView;