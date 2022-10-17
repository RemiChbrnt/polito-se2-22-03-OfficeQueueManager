Built With
Front-End: JavaSript React;
Back-End: JavaScript React;
Database: Firebase;
Test framework: Mocha;


# API DOC #

## Firestore ##
Services : "service name"
    - contains tickets queue [array] : "id", "timestamp"
    - contains average serving time [number] : "estimatedTime"

Desks : "desk name"
    - contains available services [array] : "service name"

Authentication : TODO   


## API ##

### Ticket ###

createTicket : 
    - parameters : service name
    - return : ticket ID (string), estimated waiting time (number)

removeTicket :
    - parameters : service name, ticket ID
    - return : boolean

getTicketsFromService : 
    - parameters : service name
    - return : array of the tickets in queue

### Service ###

createService :
    - parameters: service name, estimated service time
    - return : SUCCESS or FAILURE (boolean)

getServicesNames :
    - parameters : None
    - return : array with the services names

checkServiceName :
    - parameters : service name
    - return : boolean

removeService :
    - parameters : service name
    - return : boolean

### Desk ###

createDesk :
    - parameters: desk name, services available
    - return : SUCCESS or FAILURE (boolean)

getDeskServices : 
    - parameters : desk name
    - return : array of available service names

removeDesk :
    - parameters : desk name
    - return : boolean

### Time ###

getEstimatedWaitingTime :
    - parameters : service name, ticket ID
    - return : string

### Stats ###




