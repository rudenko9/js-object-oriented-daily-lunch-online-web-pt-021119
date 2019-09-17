// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodIdId = 1;
class Neighborhood {
  constructor(name) {
    this.id = ++neighborhoodId
    this.name = name 
    
    store.neighborhoods.push(this)
  }
  
  
}