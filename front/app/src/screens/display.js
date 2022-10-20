
import db from "../firebase-config"
import { useEffect, useState } from 'react';
import { collection, getDocs, doc } from "firebase/firestore";
import '../App.css';

function Display() {

    const [update, setUpdate] = useState(false);
    const [services, setServices] = useState([]);
    const [queues, setQueues] = useState([]);
    const [desks, setDesks] = useState([]);
    const [currentCustomers, setCurrentCustomers] = useState([]);
    const servicesCollectionRef = collection(db, "services");
    const desksCollectionRef = collection(db, "Desks");

    //new ticket is issued    
    const updateTicket = async () => {

        setUpdate(!update);
    };


    const updateQueues = async () => {
        let queues = [];
        let services = await getDocs(servicesCollectionRef);
        console.log("services " + services);
        const setting = async () => {
            services.forEach(async (s) => {
                const tickets = await getDocs(collection(db, "/services/" + s.id + "/tickets"));
                queues.push(tickets.docs.length);
            })
        }
        await setting().then(() => {
            setQueues(queues);
            setServices(services.docs);
        })
        return;
    }


    const updateTickets = async () => {
        let desks = await getDocs(desksCollectionRef);
        let currentCustomers = [];
        const setting = async () => {
            desks.forEach(async (d) => {
                currentCustomers.push(d.data().currentCustomer);
            })
        }
        await setting().then(() => {
            setDesks(desks.docs);
            setCurrentCustomers(currentCustomers);
        });
        return;
    }


    useEffect(() => {
        const updateDisplay = async() => {
            await updateQueues();
            await updateTickets();
        }
        updateDisplay();
        const updateDisplayInterval = setInterval(() => updateDisplay(), 60000);
        return () => {
            clearInterval(updateDisplayInterval);
        }
    }, [update]);


    return (
        <div className="DisplayContainer">
            <div className="Display">
                <table className="tableTickets">
                    <tr className="ticketDisplay"><h3 className="ticketField">Current Ticket</h3><h3 className="ticketField">Counter</h3></tr>
                    {desks.map((d, i) => {
                        return (
                            <tr className="ticketDisplay" key={d.id}>
                                <h3 className="ticket">{currentCustomers[i]}</h3>
                                <h3 className="ticket">{d.id}</h3>
                            </tr>
                        );
                    })}
                </table>
                <table className="table">
                    <tbody>
                        <tr><th>Service</th><th>Queue length</th><th>Estimated time</th></tr>
                        {
                            services.map((s, i) => {
                                return (
                                    <tr key={s.id}>
                                        <td>{s.id}</td>
                                        <td>{queues[i] !== undefined ? queues[i] : 0}</td>
                                        <td>{s.data().estimatedTime}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export { Display };