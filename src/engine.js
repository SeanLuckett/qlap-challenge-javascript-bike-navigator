function Bike(color){
  this.wheels = 2;
  this.height = 4;
  this.width = 6;

  // set default color to red if Bike is called without it
  this.color = typeof color !== 'undefined' ? color : "red";

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
  
  this.plotLocation();
  return [this.lat, this.lng];
};

Bike.prototype.reset = function(){
  var tempBike = new Bike();
  this.lat = tempBike.lat;
  this.lng = tempBike.lng;

  return [this.lat, this.lng];
};

Bike.prototype.plotLocation = function(){
  bikePosition = new google.maps.LatLng(this.lat, this.lng);

  //the map
  var mapOptions = {
    center: bikePosition,
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map_canvas"),
                                mapOptions);
  // bike layer
  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);

  //the marker
  iconPath = "http://maps.google.com/mapfiles/ms/icons/" + this.color + "-dot.png";
  markerOptions = {
    map: map,
    position: bikePosition,
    icon: iconPath
  };

  bikeMarker = new google.maps.Marker(markerOptions);
  geocoder = new google.maps.Geocoder();
  var address;
  geocoder.geocode({'latLng': bikePosition}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      var positionHTML = "<p>Bike is located in " + results[4].formatted_address + ".</p>";
      $("#text_location").html(positionHTML);
    } else {
      alert("Geocoder failed due to: " + status);
    }
  });
  //var positionHTML = "<p>Bike is located at " + this.lat + ", " + this.lng + ".</p>";

  return [this.lat, this.lng];
};
