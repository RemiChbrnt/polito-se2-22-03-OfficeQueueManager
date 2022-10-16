import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row} from 'react-bootstrap';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Services } from './components/customer/CustomerComponents'; 
import { NavigationBar } from './components/Navbar';
import db from "./firebase-config.js";
import React, {useState, useEffect } from 'react';
import {collection, getDocs} from 'firebase/firestore';


function App() {

    //const [services, setServices] = useState([]);
    // const [customers, setCustomers] = useState([]); 
    // const [loggedIn, setLoggedIn] = useState(false);
    const [customerRequest, setCustomerRequest] = useState(false);

    //const servicesCollectionRef = collection(db, "services");
    //const customersCollectionRef= collection(db, "customers"); //reminder: create customer collection with id and serviceid associated

    // useEffect(() => {
    //     const getServices = async() => {
    //         const data = await getDocs(servicesCollectionRef);
    //         setServices(data.docs.map((doc) => ({ ...doc.data(), id:doc.id })));
    //     }
    //   //   const getCustomers = async() => {
    //   //     const data = await getDocs(customersCollectionRef);
    //   //     setCustomers(data.docs.map((doc) => ({ ...doc.data(), id:doc.id })));
    //   // }
    //     getServices();
    //     //getCustomers(); 
    // }, []);
    const handleCreateRequest=async(option)=>{
      try{
        // const user=await API.getUserInfo();
        // const request=await API.createRequest(option, user.id);
        
        // if(request) 
          setCustomerRequest(true); 
      }catch(err){
        console.log(err);
      }
    }
  return (

    <Container> 
      <BrowserRouter> 
      <NavigationBar/>
        <Routes>
          <Route path='/online-services' element={
              <ClientView createRequest = {handleCreateRequest}
                          customerRequest={customerRequest} 
                          setCustomerRequest={setCustomerRequest}/>
           } />
          <Route path='*' element={<h1>Url makes no sense</h1>} />
        </Routes>
      </BrowserRouter>
    </Container>
    
  );
}

function ClientView(props){
  return(
    <Container fluid> 
        <Row> 
          <Col> 
            <Services createRequest={props.createRequest}
                      customerRequest={props.customerRequest} 
                      setCustomerRequest={props.setCustomerRequest}></Services>
          </Col>
        </Row>
    </Container>

  ); 
}

export default App;
