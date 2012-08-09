function Bike(){
  this.wheels = 2;
  this.height = 4;
  this.width = 6

  this.lat = 40.017094;
  this.lng = -105.283799;

}

Bike.prototype.move = function(direction, distance){
  if (arguments.length < 2) throw "Wrong number of arguments: " + arguments.length + " for 2"

  var conversion = 69.172;
  var numDegrees = distance / conversion;

  switch(direction) {
    case "north":
      this.lat += parseFloat(numDegrees.toFixed(6));
      break;
    case "south":
      this.lat -= parseFloat(numDegrees.toFixed(6));
      break;
    case "east":
      this.lng += parseFloat(numDegrees.toFixed(6));
      break;
    case "west":
      this.lng -= parseFloat(numDegrees.toFixed(6));
      break;
    default:
      throw "direction incorrectly entered";
      break;
  }

  return [this.lat, this.lng];
};

Bike.prototype.reset = function(){
  var tempBike = new Bike();
  this.lat = tempBike.lat;
  this.lng = tempBike.lng;

  return [this.lat, this.lng];
};

Bike.prototype.plotLocation = function(){
  return [this.lat, this.lng];
};
