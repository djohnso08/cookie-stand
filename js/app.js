'use strict';

var hoursArray = ['6am','7am','8am','9am','10am','1am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var stores = [];
var totalcookiesByHr = 0;
var total = 0;

function MakeStore(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.randCust = [];
  this.cookiesPerHr = [];
  this.totalCookies = 0;
  stores.push(this);
  this.calcrandCust = function() {
    for (var i = 0; i < hoursArray.length; i++) {
      this.randCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
    }
  };
  this.calcCookies = function() {
    for (var i = 0; i < hoursArray.length; i++) {
      this.cookiesPerHr.push(Math.round(this.avgCookies * this.randCust[i]));
      this.totalCookies += this.cookiesPerHr[i];
    }
  };
  this.calcrandCust();
  this.calcCookies();
}

function makeNewStore() {
  new MakeStore('1st and Pike', 23, 65, 6.3);
  new MakeStore('SeaTac Airport', 3, 24, 1.2);
  new MakeStore('Seattle Center', 11, 38, 3.7);
  new MakeStore('Capitol Hill', 20, 38, 2.3);
  new MakeStore('Alki', 2, 16, 4.6);
}
makeNewStore();


function makeHeader() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);

  for(var i = 0;i < hoursArray.length;i++) {
    thEl = document.createElement('th');
    thEl.textContent = hoursArray[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  cookiestands.appendChild(trEl);
}
makeHeader();

function makeOneDataRow() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  for (var j = 0; j < stores.length; j++) {
    trEl = document.createElement('tr');
    tdEl.textContent = stores[j].name;
    trEl.appendChild(tdEl);
    
    for (var i = 0; i < hoursArray.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = stores[j].cookiesPerHr[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = stores[j].totalCookies;
    trEl.appendChild(tdEl);
    cookiestands.appendChild(trEl);
  }
 
}
makeOneDataRow();
console.log(stores);
console.log(stores.totalCookies);

// function makeFooter() {
//   var cookiestands = document.getElementById('cookiestands');
//   var trEl = document.createElement('tr');
//   var tdEl = document.createElement ('td');

//   for (var i = 0; i < hoursArray.length;i++) {
//     trEl = document.createElement('tr');
//     tdEl.textContent = stores[i].total;
//     trEl.appendChild(tdEl);
//   }
// }

