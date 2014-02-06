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
  return this.amountOfResource
}

Resource.prototype.provideResource = function() {
  resourcesProvided = this.amountOfResource;
  this.amountOfResource = 0;
  return resourcesProvided;
}

// Grassland
function Grassland() {
  this.rate = 1;
  this.cap = 5;
}

Grassland.prototype = new Resource;

// Resource Pools
function ResourcePool() {
  this.amountOfResource = 0
}