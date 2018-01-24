'use strict';

var hoursArray = [' 6am: ',' 7am: ',' 8am: ',' 9am: ',' 10am: ',' 11am: ',' 12pm: ',' 1pm: ',' 2pm: ',' 3pm: ',' 4pm: ',' 5pm: ',' 6pm: ',' 7pm: ',' 8pm: '];

var pike = {
  store: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  randNum: function() {
    return Math.floor(Math.random() * (pike.maxCust - pike.minCust)) + 1;
  },
  cookiesPerHr: [],
  results: []
};

var pike = {
  store: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  randNum: 0,
  cookiesPerHr: [],
};

var seaTac = {
  store: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCust: 1.2,
  randNum: 0,
  cookiesPerHr: [],
};

var seattle = {
  store: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCust: 3.7,
  randNum: 0,
  cookiesPerHr: [],
};

var capHill = {
  store: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCust: 2.3,
  randNum: 0,
  cookiesPerHr: [],
};
 
var alki = {
  store: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCust: 4.6,
  randNum: 0,
  cookiesPerHr: [],
};
