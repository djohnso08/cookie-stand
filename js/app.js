'use strict';

var hoursArray = [' 6am ',' 7am ',' 8am ',' 9am ',' 10am ',' 11am ',' 12pm ',' 1pm ',' 2pm ',' 3pm ',' 4pm ',' 5pm ',' 6pm ',' 7pm ',' 8pm '];

var Pike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  randCust: [],
  cookiesPerHr: [],
  totalCookies: 0,
  calcRand: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      this.randCust.push(
        Math.floor(
          Math.random() * (this.maxCust - this.minCust + 1)
        ) + this.minCust
      );
    }
  },
  calcCookies: function() {
    for (var j = 0; j < hoursArray.length; j++) {
      this.cookiesPerHr.push(
        Math.round(this.avgCookies * this.randCust[j])
      );
    }
  },
  render: function() {
    var firstpike = document.getElementById('firstpike');
    this.calcRand();
    this.calcCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    firstpike.appendChild(h3El);
    for (var k = 0; k < hoursArray.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent =
        hoursArray[k] + ': ' + this.cookiesPerHr[k] + ' cookies';
      firstpike.appendChild(liEl);
    }
  }
};
Pike.render();

var SeaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  randCust: [],
  cookiesPerHr: [],
  totalCookies: 0,
  calcRand: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      this.randCust.push(
        Math.floor(
          Math.random() * (this.maxCust - this.minCust + 1)
        ) + this.minCust
      );
    }
  },
  calcCookies: function() {
    for (var j = 0; j < hoursArray.length; j++) {
      this.cookiesPerHr.push(
        Math.round(this.avgCookies * this.randCust[j])
      );
    }
  },
  render: function() {
    var seatac = document.getElementById('seatac');
    this.calcRand();
    this.calcCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    seatac.appendChild(h3El);
    for (var k = 0; k < hoursArray.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent =
        hoursArray[k] + ': ' + this.cookiesPerHr[k] + ' cookies';
      seatac.appendChild(liEl);
    }
  }
};
SeaTac.render();

var SeattleCenter = {
  name: 'Seattle Center',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  randCust: [],
  cookiesPerHr: [],
  totalCookies: 0,
  calcRand: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      this.randCust.push(
        Math.floor(
          Math.random() * (this.maxCust - this.minCust + 1)
        ) + this.minCust
      );
    }
  },
  calcCookies: function() {
    for (var j = 0; j < hoursArray.length; j++) {
      this.cookiesPerHr.push(
        Math.round(this.avgCookies * this.randCust[j])
      );
    }
  },
  render: function() {
    var seattlecenter = document.getElementById('seattlecenter');
    this.calcRand();
    this.calcCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    seattlecenter.appendChild(h3El);
    for (var k = 0; k < hoursArray.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent =
        hoursArray[k] + ': ' + this.cookiesPerHr[k] + ' cookies';
      seattlecenter.appendChild(liEl);
    }
  }
};
SeattleCenter.render();

var CapitolHill = {
  name: 'Capitol Hill',
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  randCust: [],
  cookiesPerHr: [],
  totalCookies: 0,
  calcRand: function() {
    for (var i = 0; i < hoursArray.length; i++) {
      this.randCust.push(
        Math.floor(
          Math.random() * (this.maxCust - this.minCust + 1)
        ) + this.minCust
      );
    }
  },
  calcCookies: function() {
    for (var j = 0; j < hoursArray.length; j++) {
      this.cookiesPerHr.push(
        Math.round(this.avgCookies * this.randCust[j])
      );
    }
  },
  render: function() {
    var capitolhill = document.getElementById('capitolhill');
    this.calcRand();
    this.calcCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    capitolhill.appendChild(h3El);
    for (var k = 0; k < hoursArray.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent =
        hoursArray[k] + ': ' + this.cookiesPerHr[k] + ' cookies';
      capitolhill.appendChild(liEl);
    }
  }
};
CapitolHill.render();