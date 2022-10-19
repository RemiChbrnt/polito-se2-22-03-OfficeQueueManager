import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Button, Form, Container} from 'react-bootstrap';
import { useState} from 'react';

function Services(props) {
    const [form, setForm] = useState(false);
      return (
         <Col>
          {!props.customerRequest && !form && <Container fluid className="createRequestContainer">
            <CreateRequest form={form} setForm={setForm}/> 
          </Container>}
          {form && !props.customerRequest &&
            <Container className="createRequestContainer">
                  <RequestFormCreate setForm={setForm} createTicket={props.createTicket}/>
            </Container>
          }
          {props.customerRequest &&
            <Container fluid className="editPlanContainer">
            <Col>
              <Row className="editRow">
                <Col>
                  <b>Requested Service</b> &emsp;
                  </Col>
              </Row>
              <br></br>
            </Col>
            </Container>
          }
         </Col>
      );
  }
  
  function CreateRequest(props){
    return(
      <>
        <Col><span>No service requested yet. </span></Col>
        <Col className="buttonCol"><Button className="bn632-hover1 bn27" borderless="true" onClick={() => props.setForm(true)}>CREATE REQUEST</Button></Col>
      </>
    );
  }

  function RequestFormCreate(props){
    const [selectedService, setSelectedService] = useState("serviceTest1");
  
    const handleCreate = () => {
      console.log(`Creating ticket for ${selectedService}`);
      let test = props.createTicket(selectedService);
      console.log(test);
      props.setForm(false);
    };

    return(
      <>
        <Form onSubmit={() => handleCreate()}>
          <Form.Group className="mb-3 createForm" controlId='option'>
            <Form.Label>SELECT OPTION</Form.Label>
            <Form.Select onChange={ev => setSelectedService(ev.target.value)} value={selectedService}>
              <option>serviceTest1</option>
              <option>serviceTest2</option>
              <option>service 3</option>
              <option>service 4</option>
              <option>service 5</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" className="bn632-hover2 bn27" borderless="true">CONFIRM</Button>
        </Form>
      </>
    );
  }

  export { Services };