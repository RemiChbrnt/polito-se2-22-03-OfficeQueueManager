import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const SideBar = () => {

    const { filter } = useParams();
    let f;
    if(filter !== undefined) { //considera il caso in cui mi trovo in "/" invece di "/homePage" o "/loggedInPage"
        f=filter;
    }
    else {
        f="home"
    }
    const [selectedFilter, setSelectedFilter] = useState(f);
    const navigate = useNavigate();

    return (
            <ListGroup variant="flush">
                {selectedFilter === "home" ? <ListGroup.Item className="bg-secondary text-white" active><h5>Home</h5></ListGroup.Item> : <ListGroup.Item action onClick={() => { setSelectedFilter("home"); navigate(`/`) }}><h5>Home</h5></ListGroup.Item>}
                {selectedFilter === "client" ? <ListGroup.Item className="bg-secondary text-white" active><h5>Client</h5></ListGroup.Item> : <ListGroup.Item action onClick={() => { setSelectedFilter("client"); navigate(`/client`) }}><h5>Ranking</h5></ListGroup.Item>}
                {selectedFilter === "desk-officer" ? <ListGroup.Item className="bg-secondary text-white" active><h5>Desk Officer</h5></ListGroup.Item> : <ListGroup.Item action onClick={() => { setSelectedFilter("desk-officer"); navigate(`/desk-officer`) }}><h5>Desk Officer</h5></ListGroup.Item>}
                {selectedFilter === "admin" ? <ListGroup.Item className="bg-secondary text-white" active><h5>Admin</h5></ListGroup.Item> : <ListGroup.Item action onClick={() => { setSelectedFilter("admin"); navigate(`/admin`) }}><h5>Admin</h5></ListGroup.Item>}
                {selectedFilter === "login" ? <ListGroup.Item className="bg-secondary text-white" active><h5>Login</h5></ListGroup.Item> : <ListGroup.Item action onClick={() => { setSelectedFilter("login"); navigate(`/login`) }}><h5>Login</h5></ListGroup.Item>}
            </ListGroup>
    );
}

export { SideBar };