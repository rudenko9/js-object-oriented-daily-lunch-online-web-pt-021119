// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodIdId = 1;
let customerId = 1;
let mealId = 1;
let deliveryId = 1;

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
    
    
    store.customers.push(this);
  }
}


class Meal {
  constructor(title, price) {
    this.id = ++mealId;
    this.title = title;
    this.price = price;
    
    store.meals.push(this)
  }
  deliveries() {
    return store.deliveries.filter(delivery => delivery.meal().id === this.id)
  }
  
  
}

class Delivery {
  constructor(meal, neighborhood,  customer){
    this.id = deliveryId++;
    if(meal){this.mealId = meal.id}
    if(neighborhood)(this.neighborhoodId = neighborhood.id)
    if(customer) {this.customerId = customer.id;}
    store.deliveries.push(this);
  }
   meal() {
    return store.meals.find(meal => this.mealId === meal.id)
  
  }
  neighborhood() {
    return store.neighborhoods.find(function(neighborhood){return neighborhood.id ===this.neighborhoodId}.bind(this))
  }
  
  customer() {
    return store.customers.find(function(customer){return customer.id === this.customerId}.bind(this))
  }
}






