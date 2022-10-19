import db from './firebase-config.js';
import {collection, addDoc, Timestamp, doc, getDoc, data} from 'firebase/firestore';

/* Function to generate a new ticket for the specified requested service. The requestedService parameter
   is one of the available services' name, used to insert the ticket in the correct queue. Each ticket 
   has a timestamp, in order to keep them sorted according to the arrival order.
*/

/* TODO: change the service names and waiting times to the actual ones */
async function createTicket(requestedService) {
    if(requestedService === 'serviceTest1' || requestedService === 'serviceTest2'){
        const docRef = await addDoc(collection(db, "/services/" + requestedService + "/tickets"), {
            timestamp : Timestamp.now()
        });
        const serviceRef = doc(db, "services", requestedService);
        const service = await getDoc(serviceRef);
        console.log('Returning ' + docRef.id + ' - ' + service.data().estimatedTime);
        return [docRef.id, service.estimatedTime];
    } else {
        console.log('ERROR: Unsupported service');
    }
}

export default createTicket;