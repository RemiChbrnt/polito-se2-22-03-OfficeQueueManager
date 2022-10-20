import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Button, Form, Container } from 'react-bootstrap';
import { useState } from 'react';

function Services(props) {
  const [form, setForm] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [waitingTime, setWaitingTime] = useState('');
  console.log(props.customerRequest);
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
          <RequestFormCreate
            setCustomerRequest={props.setCustomerRequest}
            setForm={setForm}
            createTicket={props.createTicket}
            setTicketId={setTicketId}
            setWaitingTime={setWaitingTime}
            ticketId={ticketId}
            waitingTime={waitingTime} />
          : false
        /*</Container>*/
      }
      {
        props.customerRequest ?/*&&
        <Container fluid className="editPlanContainer">*/
          <Row>
            <Col md={10}>
              <h2>Requested service</h2>
              <ul></ul>
              <p><b>Ticket ID:</b> {ticketId}</p>
              <p><b>Expected Waiting Time:</b> {waitingTime}</p>
            </Col>
            <Col md={2}>
              <ul></ul>
              <div className="d-grid gap-2">
                <Button variant="danger" size="lg" onClick={() => { setForm(false); props.setCustomerRequest(false); /*add by function called backend to delete ticket from db*/ }}><h4>Delete</h4></Button>
              </div>
            </Col>
          </Row>
          : false
        /*</Container>*/
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
        <Col md={2}/*className="buttonCol"*/>
          <Button variant="white" size="lg" style={{ backgroundColor: "#00706c" }} /*className="bn632-hover1 bn27" borderless="true"*/ onClick={() => props.setForm(true)}><h4 className="text-white">Create request</h4></Button>
        </Col>
      </Row>
    </>
  );
}

function RequestFormCreate(props) {
  const [selectedService, setSelectedService] = useState("serviceTest1");
  const handleCreate = async (event) => {
    event.preventDefault();
    let res = await props.createTicket(selectedService);
    props.setTicketId(res[0]);
    props.setWaitingTime(res[1]);
    console.log(res);
    props.setForm(false);
    props.setCustomerRequest(true);
  };

  return (
    <>
      <Form onSubmit={handleCreate}>
        <Form.Group className="mb-3 createForm" controlId='option'>
          <Form.Label><h2>Select option</h2></Form.Label>
          <Form.Select onChange={ev => setSelectedService(ev.target.value)}>
            <option>serviceTest1</option>
            <option>serviceTest2</option>
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