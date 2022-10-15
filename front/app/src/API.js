import db from './firebase-config.js';
import {collection, addDoc, Timestamp} from 'firebase/firestore';

/* Function to generate a new ticket for the specified requested service. The requestedService parameter
   is one of the available services' name, used to insert the ticket in the correct queue. Each ticket 
   has a timestamp, in order to keep them sorted according to the arrival order.
*/

/* TODO: change the service names and waiting times to the actual ones */
async function createTicket(requestedService) {
    if(requestedService === 'serviceTickets1' || requestedService === 'serviceTickets2' || requestedService === 'serviceTickets3'){
        const docRef = await addDoc(collection(db, String(requestedService)), {
            timestamp: Timestamp.now()
        });

        db.collection(String(requestedService)).get().then(snap => {
            const size = snap.size;
            /* TODO: multiply the size of the queue by the average waiting time for the correspondent service */
        });
        return docRef.id;
    } else {
        console.log('ERROR: unsupported service');
    }
}

export default createTicket;