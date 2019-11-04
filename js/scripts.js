function Places(){
  this.locations = [];
}

function Location(city, country, landmark, date){
  this.city = city;
  this.country = country;
  this.landmark = landmark;
  this.date = date;
}

Places.prototype.addLocation = function(location){
  this.locations.push(location);
}

Places.prototype.getLocation = function(index){
  for (i=0; i < this.locations.length; i++){
    if (this.locations[i]) {
      if (i === index) {
        return this.locations[index];
      }
    }
  }
  return false;
}

var boise = new Location("Boise", "usa", "table rock", "10/01/2019");
var vegas = new Location("Las Vegas", "USA", "Strip", "7/26/2019");


var myPlaces = new Places();
myPlaces.addLocation(boise);
myPlaces.addLocation(vegas);
console.log(myPlaces.getLocation(0));



$(document).ready(function() {
  $("form#form").one("submit", function(event) {
    event.preventDefault();
    var searchInput = parseInt($("input#primeBox").val());
    if (isNaN(searchInput)){
      console.log("Please enter a number");
    }
    var tempArray = Object.values(myPlaces.getLocation(searchInput));
    for (var i = 0; i < tempArray.length; i++) {
      $("#resultBox").append("<li>" + tempArray[i] + " </li>");
    }
    console.log(searchInput);
    console.log(Object.values(myPlaces.getLocation(searchInput)));

console.log();

  });
  $("#Boise").one("click", function(event){
    event.preventDefault();
    var tempArray = Object.values(myPlaces.getLocation(0));
    for (var i = 0; i < tempArray.length; i++) {
      $("#resultBox").append("<li>" + tempArray[i] + " </li>");
    }
  });
  $("#vegas").one("click", function(event){
    event.preventDefault();
    var tempArray = Object.values(myPlaces.getLocation(1));
    for (var i = 0; i < tempArray.length; i++) {
      $("#resultBox").append("<li>" + tempArray[i] + " </li>");
    }
  });

});
