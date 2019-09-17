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
}

class Delivery {
  constructor(meal, neighborhood,  customer){
    this.id = deliveryId++;
    if(meal){this.mealId = meal.id}
    if(neighborhood)(this.neighborhoodId = neighborhood.id)
    if
  }
}






