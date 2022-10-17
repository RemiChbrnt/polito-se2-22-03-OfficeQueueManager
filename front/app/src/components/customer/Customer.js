function Customer (code, serviceCode=null, waitingTime=null) {
    this.code = code;
    this.serviceCode=serviceCode; 
    this.waitingTime=waitingTime; 
  }

export default Customer;