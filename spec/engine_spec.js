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
});
