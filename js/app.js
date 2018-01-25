'use strict';

var hoursArray = [' 6am: ',' 7am: ',' 8am: ',' 9am: ',' 10am: ',' 11am: ',' 12pm: ',' 1pm: ',' 2pm: ',' 3pm: ',' 4pm: ',' 5pm: ',' 6pm: ',' 7pm: ',' 8pm: '];

var Pike = {
  store: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  total: 0,
  randNum: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + 1;
  },
  cookiesPerHr: [],
};

var SeaTac = {
  store: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  total: 0,
  randNum: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + 1;
  },
  cookiesPerHr: [],
};

var Seattle = {
  store: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  total: 0,
  randNum: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + 1;
  },
  cookiesPerHr: [],
};

var CapHill = {
  store: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  total: 0,
  randNum: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + 1;
  },
  cookiesPerHr: [],
};
 
var Alki = {
  store: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  total: 0,
  randNum: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + 1;
  },
  cookiesPerHr: [],
};
