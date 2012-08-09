describe("Bike", function() {
  var bike;

  beforeEach(function(){
    bike = new Bike();
  });

  it("exists", function(){
    expect(bike).toBeDefined();
  });
  
  it("has 2 wheels", function(){
    expect(bike.wheels).toEqual(2);
  });

  it("has dimensions", function(){
    expect(bike.height).toEqual(4);
    expect(bike.width).toEqual(6);
  });

  it("has a position", function(){
    expect(bike.lat).toEqual(40.017094);
    expect(bike.lng).toEqual(-105.283799);
  });

  describe("#move", function(){

    it("throws an error when called with no arguments", function(){
      expect(bike.move).toThrow("Wrong number of arguments: 0 for 2");
    });

    it("throws an error when called with one argement", function(){
      expect(bike.move.bind(this, "south")).toThrow("Wrong number of arguments: 1 for 2");
    });

    describe("latitude", function(){

      it("adds to latitude when going north", function(){
        moveNorth = bike.move("north", 20.5);
        expect(moveNorth).toEqual([40.313457, bike.lng]);
      });

      it("subtracts from latitude when going south", function(){
        moveSouth = bike.move("south", 20.5);
        expect(moveSouth).toEqual([39.720731, bike.lng]);
     });
    });

    describe("longititude", function(){

      it("adds to longitude when going east", function() {
        moveEast = bike.move("east", 20.5);
        expect(moveEast).toEqual([bike.lat, -104.987436]);
      });

      it ("subtracts from longitude when going west", function() {
        moveWest = bike.move("west", 20.5);
        expect(moveWest).toEqual([bike.lat, -105.580162]);
      });
    });
  });

  describe("#reset", function(){
    beforeEach(function(){
      bike.lat = 0;
      bike.lng = 0;
      defaultPosition = bike.reset();
    });

    it("resets bike's position to default", function () {
      expect(bike.lat).toEqual(40.017094);
      expect(bike.lng).toEqual(-105.283799);
    });

    it("returns an array including lat and lng", function(){
      expect(defaultPosition).toEqual([40.017094, -105.283799]);
    });
  });

  describe("#plotLocation", function(){
    it("returns location as an array", function(){
      pos = bike.plotLocation();
      expect(pos).toEqual([40.017094, -105.283799]);
    });
  });
});
