
import db from "../firebase-config"
import { useEffect, useState } from 'react';
import { collection, getDocs, doc } from "firebase/firestore";

function Display() {

    const [loading, setLoading] = useState(true);
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
        setLoading(true);
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
            setLoading(false);
        })
        return;
    }


    const updateTickets = async () => {
        setLoading(true);
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
            setLoading(false);
        });
        return;
    }


    useEffect(() => {
        const updateDisplay = async () => {
            await updateQueues();
            await updateTickets();
        }
        updateDisplay();
    }, [update]);


    return (
        <div className="App">
            {!loading &&
                <div className="Display">
                    <table>
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
                    <table>
                        <tbody>
                            <tr><th>Current Ticket</th><th>Counter</th></tr>
                            {desks.map((d, i) => {
                                return (
                                    <tr key={d.id}>
                                        <td>{currentCustomers[i]}</td>
                                        <td>{d.id}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}

export { Display };