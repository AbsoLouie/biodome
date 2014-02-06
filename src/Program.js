var land;
land = new Land();
animalFarm = [];

window.setInterval(function(){
  land.growGrass();
  console.log(land.amountOfGrass);
},1000);

window.setInterval(function(){
  animalFarm.push(new Animal())
  animalFarm.forEach(function(animal) {
    animal.eat(land)
    console.log("A new bunny is born!")
  })
},5000);
