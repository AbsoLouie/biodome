// Resources
function Resource() {
  this.rate = NaN;
  this.cap = NaN;
  this.amountOfResource = 0;
}

Resource.prototype.produceResource = function() {
  if (this.amountOfResource < this.cap){
    this.amountOfResource += this.rate;    
  }
  this.amountOfResource
}

Resource.prototype.provideResource = function(amount) {
  amountUsed = typeof amount !== 'undefined' ? amount : this.amountOfResource;
  this.amountOfResource -= amountUsed;
  return amountUsed;
}

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

Animal.prototype.isHungry = function() {
  if (this.amountOfResource <= (1/2)*this.cap) {
    return true
  }
}

Animal.prototype.feed = function(resource) {
  if (this.isHungry()) {
    this.amountOfResource += resource.provideResource(this.mealSize)
  }
}

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