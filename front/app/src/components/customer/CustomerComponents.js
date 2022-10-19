import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Button, Form, Container } from 'react-bootstrap';
import { useState } from 'react';

function Services(props) {
  const [form, setForm] = useState(false);
  return (
    <Col>
      {
        !props.customerRequest && !form ? /* && <Container fluid className="createRequestContainer">*/
          <CreateRequest form={form} setForm={setForm} /> : false
        /*</Container>*/
      }
      {
        form && !props.customerRequest ? /*&&
        <Container className="createRequestContainer">*/
          <RequestFormCreate setForm={setForm} createTicket={props.createTicket} /> : false
        /*</Container>*/
      }
      {
        props.customerRequest &&
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

function CreateRequest(props) {
  return (
    <>
      <Row>
        <Col><h3>No service requested yet. </h3></Col>
      </Row>
      <ul></ul>
      <Row>
        <Col md={10}></Col>
        <Col md={2}/*className="buttonCol"*/><Button variant="white" size="lg" style={{ backgroundColor: "#85CDCB" }} /*className="bn632-hover1 bn27" borderless="true"*/ onClick={() => props.setForm(true)}><h4 className="text-white">Create request</h4></Button></Col>
      </Row>
    </>
  );
}

function RequestFormCreate(props) {
  const [selectedService, setSelectedService] = useState("serviceTickets1");

  const handleCreate = () => {
    let test = props.createTicket(selectedService);
    console.log(test);
    props.setForm(false);
  };

  return (
    <>
      <Form onSubmit={() => handleCreate()}>
        <Form.Group className="mb-3 createForm" controlId='option'>
          <Form.Label><h2>Select option</h2></Form.Label>
          <Form.Select onChange={ev => setSelectedService(ev.target.value)} value={selectedService}>
            <option>serviceTickets1</option>
            <option>serviceTickets2</option>
          </Form.Select>
        </Form.Group>

        <ul></ul>
        <Row>
          <Col md={10}>
            <Button variant="danger" size="lg" onClick={() => { props.setForm(false) }}><h4>Back</h4></Button>
          </Col>
          <Col md={2}/*className="buttonCol"*/>
            <div className="d-grid gap-2">
              <Button variant="success" size="lg" type="submit"><h4>Confirm</h4></Button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export { Services };