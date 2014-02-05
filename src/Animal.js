function Animal() {
  this.satiationLevel = 0
  this.hungerThreshold = 5
}

Animal.prototype.isHungry = function() {
  if (this.satiationLevel < this.hungerThreshold){
    return true;
  } else {
    return false;
  }
}

Animal.prototype.eat = function(consumable) {
  consumable.beEaten();
  this.satiationLevel += 1;
}