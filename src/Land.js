Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

// Resources
function Resource() {
  this.rate = NaN;
  cap = NaN;
  this.amountOfResource = 0;
}

Resource.method('produceResource', function () {
  if (this.amountOfResource < cap){
    this.amountOfResource += this.rate;
  }
  return this.amountOfResource
});

Resource.method('provideResource', function (amount) {
  amount = typeof amount !== 'undefined' ? amount : this.amountOfResource;
  this.amountOfResource -= amount;
  return amount;
});

// Grassland
function Grassland() {
  this.rate = 1;
  cap = 5;
}

Grassland.prototype = new Resource;

// Animals

function Animal() {
  mealSize = NaN
  fecundAt = NaN
  maxAge = NaN
  this.isAlive = true
  this.isFecund = false
}

Animal.prototype = new Resource;

Animal.method('isHungry', function () {
  if (this.amountOfResource <= (1/2)*cap) {
    return true
  }
})

Animal.method('feed', function (resource) {
  this.amountOfResource += resource.provideResource(mealSize)
})

Animal.method('grow', function () {
  ++this.age 
  this.checkHealth
})

Animal.method('checkHealth', function () {
  this.checkAge();
  this.checkFecundity();
})

Animal.method('checkAge', function () {
  if (this.age >= maxAge) {
    this.isAlive = false;
  }  
})

Animal.method('checkFecundity', function () {
  if (this.age >= fecundAt) {
    this.isFecund = true;
  }
})

// Rabbit

function Rabbit() {
  maxAge = 600
  fecundAt = 60
  mealSize = 2
  cap = 4
  this.amountOfResource = 1
}

Rabbit.prototype = new Animal;

// Resource Pools
function ResourcePool() {
  this.amountOfResource = 0
}