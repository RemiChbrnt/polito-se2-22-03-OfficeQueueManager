import './App.css';

import db from "./firebase-config.js";
import React, {useState, useEffect } from "react";
import {collection, getDocs} from "firebase/firestore";


function App() {

    const [services, setServices] = useState([]);
    const [otherServices, setOtherServices] = useState([]);

    const servicesCollectionRef = collection(db, "services");
    const otherServicesCollectionRef = collection(db, "otherServices");

    useEffect(() => {
        const getServices = async() => {
            const data = await getDocs(servicesCollectionRef);
            setServices(data.docs.map((doc) => ({ ...doc.data(), id:doc.id })));
        }

        const getOtherServices = async() => {
          const data = await getDocs(otherServicesCollectionRef);
          setOtherServices(data.docs.map((doc) => ({ ...doc.data(), id:doc.id })));
      

        getServices();
        getOtherServices();
    }, []);

  return (
    <div className="App">
      <header className="App-header">
              <p>Office Queue Management</p>
              <div>
              {services.map((service) => (

                  <h1 key={service.name}>{service.name}</h1>

              ))}
          </div>
          <div>
              {otherServices.map((otherService) => (

                  <h1 key={otherService.name}>{otherService.name} - ID: {otherService.serviceNumber}</h1>

              ))}
          </div>
      </header>
          
    </div>
  );
}

export default App;
