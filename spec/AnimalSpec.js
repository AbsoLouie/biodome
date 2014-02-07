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

    it("should eat grass to battle hunger", function() {
      rabbit.feed(grassland)
      expect(rabbit.amountOfResource).toEqual(3);
    });

  });

});