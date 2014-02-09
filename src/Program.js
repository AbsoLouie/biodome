var rabbit;
var grassland;

rabbit = new Rabbit();
grassland = new Grassland();

window.setInterval(function() {
  rabbit.feed(grassland);
  console.log('Rabbit just ate')
}, 5000)

window.setInterval(function() {
  grassland.produceResource();
  console.log('There is ' + grassland.amountOfResource + ' grass.')
}, 1000)

