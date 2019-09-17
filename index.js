// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodIdId = 1;
let customerId = 1;

class Neighborhood {
  constructor(name) {
    this.id = ++neighborhoodId
    this.name = name 
    
    store.neighborhoods.push(this)
  }
  
}



class Customer {
  constructor(name, neighborhood) {
    this.id = ++customerId
    this.name = name 
    this.
  }
}