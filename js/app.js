// 'use strict';
// var stores = [];

'use strict';
//constructors! think of it like a specialized machine in a factory that creates new objects
//prototypes are the functionality that the machine adds to the objects

//we need to define our hours and store them
var hoursArray = [' 6am ',' 7am ',' 8am ',' 9am ',' 10am ',' 11am ',' 12pm ',' 1pm ',' 2pm ',' 3pm ',' 4pm ',' 5pm ',' 6pm ',' 7pm ',' 8pm '];
var storeTotals = 0;

//we need to create a place for our list of all locations to be placed whenwe create them
var locations = [];

//we need to define a variable that will be dynamic depending on how many cookies
var totalCookiesByHour = 0;
//totalTotal
var Total = 0;

//constructor function begin with an Uppercase letter

function Stores(name,minCust,maxCust,avgCookies) {
  //a function called Stores will be a template for creating new objects that represent other locations
  //the statements in this function add properties and or methods to the objects
  //the this keyword is used instead of the object name to indicate that th property or method belongs to the object that this function creates
  //this function has four parameters and each one sets the value of a property in the object
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  //why is this an array?
  this.randCust = [];
  this.cookiesPerHr = [];
  this.totalCookies = 0;
  locations.push(this);
  //using the this keyword in front of the method to show that the method belongs to the object that this function creates
  // this.calcRandCustByHour = function() {
  // METHODS GO HERE
  //THINK ABOUT PROTOTYPES
  // }
  this.calcRand = function() {

    for (var i = 0; i < hoursArray.length; i++) {
      this.randCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  };
  this.calcCookies = function() {
    for (var j = 0; j < hoursArray.length; j++) {
      this.cookiesPerHr.push(Math.round(this.avgCookies * this.randCust[j]));
    }
  };
  this.calcRand();
  this.calcCookies();
}
//remember to call the METHODS in the constructor that are now prototypes available to the new objects the constructor will MakeLocation

//call the functions in a function if you want
//this constructor function creates five new objects with their own unique values used in properties of this object (name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour)
function makeNewStore() {
    new Stores('1st and Pike', 23, 65, 6.3);
    new Stores('SeaTac Airport', 3, 24, 1.2);
    new Stores('Seattle Center', 11, 38, 3.7);
    new Stores('Capitol Hill', 20, 38, 2.3);
    new Stores('Alki', 2, 16, 4.6);
  //make one for each store
}
makeNewStore();

//time to create the table in javascript
//make header row
//table needs an id in html

function makeHeader() {
  var cookiesrands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);

  for(var k = 0;k < hours.length;k++) {
    thEl = document.createElemenet('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  cookiestands.appendChild(trEl);
};
makeHeaderRow();

//make data rows
for (var j = 0; j < allLocations.length; j++) {
  function makeOneDataRow() {
    var cookiestands = document.getElementById('cookiestands');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allLoca tions[j].name
    trEl.appendChild(tdEl);

    for (var i = 0; i < hours.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = allLocations[j].cookiesSoldByHour[i];
      trEl.appendChild(trEl);
    };
    tdEl = document.createElement('td')
    tdEl.textContent = allLocations[j].totalCookies;
    trEl.appendChild(tdEl);
    cookiestands.appendChild(trEl);
  }
    makeOneDataRow();
  };

  fucntion makeTotalsRow() {
    var cookiestands = document.getElementById('cookiestands');

  }



  //consider a for loop for the hours
//create a th element
//give the th element some text content like hours[i];
//appendChild

//create a th element
//give the th element text content 'Daily Location Total'
//append child

