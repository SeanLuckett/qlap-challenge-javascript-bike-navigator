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
});
