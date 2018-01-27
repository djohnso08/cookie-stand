'use strict';
var stores = [];
var hoursArray = [' 6am ',' 7am ',' 8am ',' 9am ',' 10am ',' 11am ',' 12pm ',' 1pm ',' 2pm ',' 3pm ',' 4pm ',' 5pm ',' 6pm ',' 7pm ',' 8pm '];

function Store(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.randCust = [];
  this.cookiesPerHr = [];
  this.totalCookies = 0;
  stores.push(this);
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
  this.render = function() {
    var table = document.getElementsByTagName('table');
    this.calcRand();
    this.calcCookies();
    var trEl = document.createElement('tr');
    trEl.textContent = this.name;
    table.appendChild(trEl);
    for (var k = 0; k < hoursArray.length; k++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = hoursArray[k] + ': ' + this.cookiesPerHr[k] + ' cookies';
      table.appendChild(tdEl);
    }
  };
}

function newStores() {
  new Store('1st and Pike', 23, 65, 6.3);
  new Store('SeaTac Airport', 3, 24, 1.2);
  new Store('Seattle Center', 11, 38, 3.7);
  new Store('Capitol Hill', 20, 38, 2.3);
  new Store('Alki', 2, 16, 4.6);
}