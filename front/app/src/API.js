import db from './firebase-config.js';
import {collection, doc, addDoc, Timestamp, getDocs, getDoc,deleteDoc, get, setDoc} from 'firebase/firestore';
import { query, orderBy, limit } from "firebase/firestore";

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
        //console.log('Returning ' + docRef.id + ' - ' + service.data().estimatedTime);
        return [docRef.id, service.data().estimatedTime];
    } else {
        console.log('ERROR: Unsupported service');
    }
}

async function nextClient(deskName){
    const deskinfo = await getDoc(doc(db,"Desks",deskName));
    const servicesNames = deskinfo.data().services;
    const queues=[]; 
    for (const queueName of servicesNames){ //retrieving the list of the queues available to that specific desk
        const docsSnap = await getDocs(collection(db,"services/"+queueName+"/tickets"));
        queues.push(docsSnap);
    }

    let size = queues[0].size;
    let selected=servicesNames[0];
    //assuming services are ordered based on service speed, we get a reference to the longest one.
    for(let i=1;i<queues.length;i++){
            // console.log("comparing:")
            // console.log(selected+" with "+servicesNames[i])
            // console.log(size+" with "+queues[i].size)
        if(size < queues[i].size){
            size = queues[i].size;
            selected = servicesNames[i];
        }
    }

    //now we shall get the id of the oldest element from the collection
    const q = query(collection(db,"services/"+selected+"/tickets"), orderBy("timestamp","asc"), limit(1));
    const querySnapshot = await getDocs(q);
    let id="";
    querySnapshot.forEach(docum=>{
        id=docum.id; // this id has to be displayed as the current client
        setDoc(doc(db, "/Desks/" + deskName + "/" + selected + "/", id), {
            timestamp : docum.data().timestamp
        });
    })

    await setDoc(doc(db, "/Desks/", deskName), {
        currentCustomer : id,
        services: servicesNames
    });

    //now we can pop it from the queue
    await deleteDoc(doc(db, "services/"+selected+"/tickets", id));
    
    return id;
}

const API=  {createTicket,nextClient} ;
export default API;