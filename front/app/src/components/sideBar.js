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
            <div style={{width:"10%", height: "100%"}}>
                {selectedFilter === "home" ? 
                    <div className="sideBarContainerActive"><h5>Home</h5></div> : 
                    <div className="sideBarContainer" onClick={() => { setSelectedFilter("home"); navigate(`/`) }}><h5>Home</h5></div>}
                {selectedFilter === "client" ? 
                    <div className="sideBarContainerActive"><h5>Client</h5></div> : 
                    <div className="sideBarContainer" onClick={() => { setSelectedFilter("client"); navigate(`/client`) }}><h5>Client</h5></div>}
                {selectedFilter === "desk-officer" ? 
                    <div className="sideBarContainerActive"><h5>Desk Officer</h5></div> : 
                    <div className="sideBarContainer" onClick={() => { setSelectedFilter("desk-officer"); navigate(`/desk-officer`) }}><h5>Desk Officer</h5></div>}
                {selectedFilter === "admin" ? 
                <div className="sideBarContainerActive"><h5>Admin</h5></div> : 
                    <div className="sideBarContainer" onClick={() => { setSelectedFilter("admin"); navigate(`/admin`) }}><h5>Admin</h5></div>}
                {selectedFilter === "login" ? 
                    <div className="sideBarContainerActive"><h5>Login</h5></div> : 
                    <div className="sideBarContainer" onClick={() => { setSelectedFilter("login"); navigate(`/login`) }}><h5>Login</h5></div>}
            </div>
    );
}

export { SideBar };