describe("Resource", function() {

  describe("Grasslands", function() {
    beforeEach(function() {
      grassland = new Grassland();
      pool = new ResourcePool();
    });

    it("should produce resources", function() {
      grassland.produceResource()
      expect(grassland.amountOfResource).toEqual(1);
    });

    it("should not produce when cap is reached", function(){
      grassland.amountOfResource = 5;
      grassland.produceResource()
      expect(grassland.amountOfResource).toEqual(5);
    });

    it("should provide resources", function() {
      grassland.produceResource();
      expect(grassland.provideResource()).toEqual(1);
      expect(grassland.amountOfResource).toEqual(0);
    });
  });
});