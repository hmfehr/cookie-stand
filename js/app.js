"use strict";

let locationSection = document.getElementById("store-location");

let dailyHours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

console.dir(dailyHours);

let seattleLocation = {
  name: "Seattle",
  minCrust: 23,
  maxCrust: 65,
  avgCookie: 6.5,
  getRandomCus: function () {
    return Math.floor(
      Math.round(
        Math.random() * (this.maxCrust - this.minCrust + 1) + this.minCrust
      ).toFixed(0)
    );
  },
  purchedCookie: [],
  getAverCookie: function () {
    for (let i = 0; i < dailyHours.length; i++) {
      let Cookies = this.avgCookie * this.getRandomCus();
      this.purchedCookie.push(Cookies);
      this.total += Cookies;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < dailyHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${dailyHours[i]}: ${this.purchedCookie[i]} cookies`;
      ulElem.appendChild(liElem);
    }
  },
};

let tokyoLocation = {
  name: 'Tokyo',
  minCrust: 3,
  maxCrust: 24,
  avgCookie: 1.2,
  getRandomCus: function () {
    return Math.floor(
      Math.round(
        Math.random() * (this.maxCrust - this.minCrust + 1) + this.minCrust
      ).toFixed(0)
    );
  },
  purchedCookie: [],
  getAverCookie: function () {
    for (let i = 0; i < dailyHours.length; i++) {
      let Cookies = this.avgCookie * this.getRandomCus();
      this.purchedCookie.push(Cookies);
      this.total += Cookies;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < dailyHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${dailyHours[i]}: ${this.purchedCookie[i]} cookies`;
      ulElem.appendChild(liElem);
    }
  },
};

let dubaiLocation = {
  name: "Dubai",
  minCrust: 11,
  maxCrust: 38,
  avgCookie: 3.7,
  getRandomCus: function () {
    return Math.floor(
      Math.round(
        Math.random() * (this.maxCrust - this.minCrust + 1) + this.minCrust
      ).toFixed(0)
    );
  },
  purchedCookie: [],
  getAverCookie: function () {
    for (let i = 0; i < dailyHours.length; i++) {
      let Cookies = this.avgCookie * this.getRandomCus();
      this.purchedCookie.push(Cookies);
      this.total += Cookies;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < dailyHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${dailyHours[i]}: ${this.purchedCookie[i]} cookies`;
      ulElem.appendChild(liElem);
    }
  },
};

let parisLocation = {
  name: "Paris",
  minCrust: 20,
  maxCrust: 38,
  avgCookie: 3.7,
  getRandomCus: function () {
    return Math.floor(
      Math.round(
        Math.random() * (this.maxCrust - this.minCrust + 1) + this.minCrust
      ).toFixed(0)
    );
  },
  purchedCookie: [],
  getAverCookie: function () {
    for (let i = 0; i < dailyHours.length; i++) {
      let Cookies = this.avgCookie * this.getRandomCus();
      this.purchedCookie.push(Cookies);
      this.total += Cookies;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < dailyHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${dailyHours[i]}: ${this.purchedCookie[i]} cookies`;
      ulElem.appendChild(liElem);
    }
  },
};

let limaLocation = {
  name: "Lima",
  minCrust: 2,
  maxCrust: 16,
  avgCookie: 4.6,
  getRandomCus: function () {
    return Math.floor(
      Math.round(
        Math.random() * (this.maxCrust - this.minCrust + 1) + this.minCrust
      ).toFixed(0)
    );
  },
  purchedCookie: [],
  getAverCookie: function () {
    for (let i = 0; i < dailyHours.length; i++) {
      let Cookies = this.avgCookie * this.getRandomCus();
      this.purchedCookie.push(Cookies);
      this.total += Cookies;
    }
  },
  render: function () {
    let articleElem = document.createElement('article');
    locationSection.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for (let i = 0; i < dailyHours.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${dailyHours[i]}: ${this.purchedCookie[i]} cookies`;
      ulElem.appendChild(liElem);
    }
  },
};





seattleLocation.getAverCookie();
seattleLocation.render();
tokyoLocation.getAverCookie();
tokyoLocation.render();
dubaiLocation.getAverCookie();
dubaiLocation.render();
parisLocation.getAverCookie();
parisLocation.render();
limaLocation.getAverCookie();
limaLocation.render();
console.log(seattleLocation);
console.log(tokyoLocation);
console.log(dubaiLocation);
console.log(parisLocation);
console.log(limaLocation);

// **** GLOBALS / WINDOW INTO THE DOM *****

// **** HELPER FUNCTIONS - UTILITES *****

// ************ CONSTRUCTOR FUNCTION **********
/*function CookieStore(name, minCust, maxCust, avgSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.customerNumber = [];
  this.cookieTotals = [];
  this.total = 0;
  storeArr.push(this);
}*/

// ******* PROTOTYPE METHODS ********

// ****** TABLE DOM RENDERING ******

// tr would be your ul?????
