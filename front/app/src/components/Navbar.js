import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Navbar } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function NavigationBar(props) {
  const navigate = useNavigate();
  return (
    <Navbar className="myNav">
      <h2 className="text-white"><i onClick={() => { navigate('/') }} className="bi bi-bank myLogo"></i>{" "}Office Queue</h2>
      <NavUser></NavUser>
    </Navbar>
  );
}

function NavUser() {
  return (
    <div className="ms-md-auto">
      <svg className="bi bi-people-circle myUser" width="35" height="35" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z" />
        <path fillRule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clipRule="evenodd" />
      </svg>
    </div>
  );
}

export { NavigationBar };