// Resources
function Resource() {
  this.rate = NaN;
  this.cap = NaN;
  this.amountOfResource = 0;
}

Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

Resource.method('produceResource', function () {
  if (this.amountOfResource < this.cap){
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
  this.cap = 5;
}

Grassland.prototype = new Resource;

// Animals

function Animal() {
  this.mealSize = NaN
}

Animal.prototype = new Resource;

Animal.method('isHungry', function () {
  if (this.amountOfResource <= (1/2)*this.cap) {
    return true
  }
})

Animal.method('feed', function (resource) {
  if (this.isHungry()) {
    this.amountOfResource += resource.provideResource(this.mealSize)
  }
})

// Rabbit

function Rabbit() {
  this.mealSize = 2
  this.amountOfResource = 1
  this.cap = 4
}

Rabbit.prototype = new Animal;

// Resource Pools
function ResourcePool() {
  this.amountOfResource = 0
}