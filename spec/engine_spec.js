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

    beforeEach(function(){
      spyOn(bike, 'move');
      newLoc = bike.move("north", 2.5);
    });

    it("gets called", function(){
      expect(bike.move).toHaveBeenCalledWith("north", 2.5);
    });

    xit("returns and array", function(){
      // May just check that the return type is an array or something; not sure.
    });
  });
});
