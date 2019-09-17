// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighbId = 1;
class Neighborhood {
  constructor(name) {
    this.id = ++neighbId
    this.name = name 
    
    store.neighborhoods.push(this)
  }
}