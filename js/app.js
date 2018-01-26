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
    var fandp = document.getElementById('fandp');
    this.calcRand();
    this.calcCookies();
    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    fandp.appendChild(h3El);
    for (var k = 0; k < hoursArray.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent =
        hoursArray[k] + ': ' + this.cookiesPerHr[k] + ' cookies';
      firstpike.appendChild(liEl);
    }
  }
};
Pike.render();

// var firstAndPike = {
//   name: 'First and Pike',
//   //creating key value pairs inside of my object they are called properties
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesSoldPerHour: 6.3,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalCookies: 0,
//   //method for random customers by hour
//   calcRandCustByHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustByHour.push(
//         Math.floor(
//           Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
//         ) + this.minCustPerHour
//       );
//       console.log(this.randCustByHour[i]);
//     }
//   },
//   //method for cookies sold by hour
//   calcCookiesSoldByHour: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesSoldByHour.push(
//         Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
//       );
//       console.log(this.cookiesSoldByHour[j]);
//     }
//   },
//   render: function() {
//     var firstandpike = document.getElementById('firstandpike');
//     var fandp = document.getElementById('fandp');
//     //calling the methods in the object literal
//     this.calcRandCustByHour();
//     this.calcCookiesSoldByHour();
//     var h3El = document.createElement('h3');
//     //give text to the new h3 element
//     h3El.textContent = this.name;
//     fandp.appendChild(h3El);
//     for (var k = 0; k < hours.length; k++) {
//       //stepping through the hours array
//       var liEl = document.createElement('li');
//       //creating li elements with text of the hours
//       liEl.textContent =
//         hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       console.log(liEl);
//       firstandpike.appendChild(liEl);
//     }
//   }
// };
// firstAndPike.render();

// var firstAndPike = {
//   name: 'First and Pike',
//   //creating key value pairs inside of my object they are called properties
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesSoldPerHour: 6.3,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalCookies: 0,
//   //method for random customers by hour
//   calcRandCustByHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustByHour.push(
//         Math.floor(
//           Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
//         ) + this.minCustPerHour
//       );
//       console.log(this.randCustByHour[i]);
//     }
//   },
//   //method for cookies sold by hour
//   calcCookiesSoldByHour: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesSoldByHour.push(
//         Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
//       );
//       console.log(this.cookiesSoldByHour[j]);
//     }
//   },
//   render: function() {
//     var firstandpike = document.getElementById('firstandpike');
//     var fandp = document.getElementById('fandp');
//     //calling the methods in the object literal
//     this.calcRandCustByHour();
//     this.calcCookiesSoldByHour();
//     var h3El = document.createElement('h3');
//     //give text to the new h3 element
//     h3El.textContent = this.name;
//     fandp.appendChild(h3El);
//     for (var k = 0; k < hours.length; k++) {
//       //stepping through the hours array
//       var liEl = document.createElement('li');
//       //creating li elements with text of the hours
//       liEl.textContent =
//         hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       console.log(liEl);
//       firstandpike.appendChild(liEl);
//     }
//   }
// };
// firstAndPike.render();

// var firstAndPike = {
//   name: 'First and Pike',
//   //creating key value pairs inside of my object they are called properties
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesSoldPerHour: 6.3,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalCookies: 0,
//   //method for random customers by hour
//   calcRandCustByHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustByHour.push(
//         Math.floor(
//           Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
//         ) + this.minCustPerHour
//       );
//       console.log(this.randCustByHour[i]);
//     }
//   },
//   //method for cookies sold by hour
//   calcCookiesSoldByHour: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesSoldByHour.push(
//         Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
//       );
//       console.log(this.cookiesSoldByHour[j]);
//     }
//   },
//   render: function() {
//     var firstandpike = document.getElementById('firstandpike');
//     var fandp = document.getElementById('fandp');
//     //calling the methods in the object literal
//     this.calcRandCustByHour();
//     this.calcCookiesSoldByHour();
//     var h3El = document.createElement('h3');
//     //give text to the new h3 element
//     h3El.textContent = this.name;
//     fandp.appendChild(h3El);
//     for (var k = 0; k < hours.length; k++) {
//       //stepping through the hours array
//       var liEl = document.createElement('li');
//       //creating li elements with text of the hours
//       liEl.textContent =
//         hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       console.log(liEl);
//       firstandpike.appendChild(liEl);
//     }
//   }
// };
// firstAndPike.render();

// var firstAndPike = {
//   name: 'First and Pike',
//   //creating key value pairs inside of my object they are called properties
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiesSoldPerHour: 6.3,
//   randCustByHour: [],
//   cookiesSoldByHour: [],
//   totalCookies: 0,
//   //method for random customers by hour
//   calcRandCustByHour: function() {
//     for (var i = 0; i < hours.length; i++) {
//       this.randCustByHour.push(
//         Math.floor(
//           Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
//         ) + this.minCustPerHour
//       );
//       console.log(this.randCustByHour[i]);
//     }
//   },
//   //method for cookies sold by hour
//   calcCookiesSoldByHour: function() {
//     for (var j = 0; j < hours.length; j++) {
//       this.cookiesSoldByHour.push(
//         Math.round(this.avgCookiesSoldPerHour * this.randCustByHour[j])
//       );
//       console.log(this.cookiesSoldByHour[j]);
//     }
//   },
//   render: function() {
//     var firstandpike = document.getElementById('firstandpike');
//     var fandp = document.getElementById('fandp');
//     //calling the methods in the object literal
//     this.calcRandCustByHour();
//     this.calcCookiesSoldByHour();
//     var h3El = document.createElement('h3');
//     //give text to the new h3 element
//     h3El.textContent = this.name;
//     fandp.appendChild(h3El);
//     for (var k = 0; k < hours.length; k++) {
//       //stepping through the hours array
//       var liEl = document.createElement('li');
//       //creating li elements with text of the hours
//       liEl.textContent =
//         hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//       console.log(liEl);
//       firstandpike.appendChild(liEl);
//     }
//   }
// };
// firstAndPike.render();