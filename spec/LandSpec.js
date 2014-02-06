describe("Land", function() {
  var land;

  beforeEach(function() {
    land = new Land();
    animal = new Animal();
  });

  it("should have a default area of 1", function() {
    expect(land.area).toEqual(1);
  })

  it("should take an input 'area'", function() {
    land = new Land(10);
    expect(land.area).toEqual(10);
  })

  it("should have no grass", function() {
    expect(land.amountOfGrass).toEqual(0);
  })

  it("should grow grass", function() {
    land.growGrass();
    expect(land.amountOfGrass).toBeGreaterThan(0);
  })

  it("should be eaten", function() {
    land.growGrass();
    grass = land.amountOfGrass;
    land.beEaten(animal);
    expect(land.amountOfGrass).toBeLessThan(grass)
  })

  it("should expand", function() {
    land.addArea(1);
    expect(land.area).toEqual(2)
  })

});