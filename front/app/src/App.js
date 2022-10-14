import './App.css';

import db from "./firebase-config.js";
import React, {useState, useEffect } from "react";
import {collection, getDocs} from "firebase/firestore";


function App() {

    const [services, setServices] = useState([]);

    const servicesCollectionRef = collection(db, "services");

    useEffect(() => {
        const getServices = async() => {
            const data = await getDocs(servicesCollectionRef);
            setServices(data.docs.map((doc) => ({ ...doc.data(), id:doc.id })));
        }

        getServices();
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
      </header>
          
    </div>
  );
}

export default App;
