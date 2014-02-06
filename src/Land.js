function Land(area) {
  this.area = typeof area !== 'undefined' ? area : 1;
  this.amountOfGrass = 0
  this.growthRate = 1
}

Land.prototype.growGrass = function() {
  this.amountOfGrass =+ this.area * this.growthRate
}

Land.prototype.beEaten = function(consumer) {
  this.amountOfGrass =- consumer.unitsConsumed;
  return consumer.unitsConsumed;
}
