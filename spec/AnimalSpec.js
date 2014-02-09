describe("Animal", function() {

  describe("Rabbit", function() {

    beforeEach(function() {
      rabbit = new Rabbit;
      grassland = new Grassland;
      grassland.amountOfResource = 2;
    });

    it("should start hungry", function() {
      expect(rabbit.isHungry()).toBeTruthy();
    });

    it("should eat grass", function() {
      rabbit.feed(grassland)
      expect(rabbit.amountOfResource).toEqual(3);
    });

    it("should die at age 600", function() {
      rabbit.age = 600
      rabbit.checkAge();
      expect(rabbit.isAlive).toEqual(false);
    })

    it("should be fecund at age 60", function() {
      rabbit.age = 60
      rabbit.checkFecundity();
      expect(rabbit.isFecund).toEqual(true);
    })
  });
});