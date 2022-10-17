import {useState, useEffect} from "react";
import { Col, Container, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";

import { Services } from '../components/customer/CustomerComponents'; 


const ClientView = () => {

    const createRequest = null;
    const [customerRequest, setCustomerRequest] = useState(false);
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
        
    return(
      <Container fluid> 
          <Row> 
            <Col> 
              <Services createRequest={createRequest}
                        customerRequest={customerRequest} 
                        setCustomerRequest={setCustomerRequest}></Services>
            </Col>
            <Link to="/">Go back</Link>
          </Row>
      </Container>
  
    ); 
}

export default ClientView;