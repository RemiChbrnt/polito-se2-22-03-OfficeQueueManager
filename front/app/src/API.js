import db from './firebase-config.js';
import {collection, doc, addDoc, Timestamp, getDocs,deleteDoc} from 'firebase/firestore';
import { query, orderBy, limit } from "firebase/firestore";

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

        // collection(db, String(requestedService)).getDoc().then(snap => {
        //     const size = snap.size;
        //     /* TODO: multiply the size of the queue by the average waiting time for the correspondent service */
        // });
        return docRef.id;
    } else {
        console.log('ERROR: unsupported service');
    }
}

async function nextClient(){
    //get all three collections
    const docsSnap1 = await getDocs(collection(db,"serviceTickets1"));
    const docsSnap2 = await getDocs(collection(db,"serviceTickets2"));
    const docsSnap3 = await getDocs(collection(db,"serviceTickets3"));

    var size = docsSnap1.size;
    var selected="serviceTickets1";
    //assuming 1 is faster than 2 and so on ...
    if(size < docsSnap2.size){size=docsSnap2.size; selected="serviceTickets2";} 
    if(size < docsSnap3.size){size=docsSnap3.size; selected="serviceTickets3";} 
    //we have the size of the longest queue and a reference to the collection

    //now we shall pop the oldest element from the right collection
    //not sure whether there is a better way:
    const q = query(collection(db,selected), orderBy("timestamp","asc"), limit(1));
    const querySnapshot = await getDocs(q);
    var id="";
    querySnapshot.forEach(doc=>{
        id=doc.id; //this id has to be displayed as the current client
    })

    //now we can pop it from the queue
    await deleteDoc(doc(db, selected, id));
    return id;
}

const API=  {createTicket,nextClient} ;
export default API;