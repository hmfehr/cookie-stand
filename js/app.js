"use strict";

let locationTable = document.getElementById("store-location");

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

let storeArr = [];
let tableElm = document.createElement("table");
locationTable.appendChild(tableElm);
console.dir(dailyHours);

function CookieStore(name, minCust, maxCust, avgSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.customerNumber = [];
  this.purchedCookie = [];
  this.total = 0;
  storeArr.push(this);
}

function getRandomCus(maxCrust, minCrust) {
  return Math.round(Math.random() * (maxCrust - minCrust + 1) + minCrust);
}

CookieStore.prototype.caculateCustHour = function () {
  for (let i = 0; i < dailyHours.length; i++) {
    this.customerNumber.push(getRandomCus(this.maxCust, this.minCust));
  }
  console.log(this.customerNumber);
};
CookieStore.prototype.avgCookie = function () {
  this.caculateCustHour();
  for (let i = 0; i < dailyHours.length; i++) {
    let cookies = this.avgSales * this.customerNumber[i];
    let roundedCookies = Math.round(cookies);
    this.purchedCookie.push(roundedCookies);
    this.total += roundedCookies;
    console.log(cookies);
  }
};

CookieStore.prototype.getmin = function () {
  this.minCust = this.avgCookie;
};
// DOM
function tableHeader(){
  let headerRow = document.createElement("tr");
  locationTable.appendChild(headerRow);

  let space = document.createElement("th");
  space.textContent = "";
  headerRow.appendChild(space);

  for (let i = 0; i < dailyHours.length; i++) {
    let storeElem = document.createElement("th");
    storeElem.textContent = dailyHours[i];
    headerRow.appendChild(storeElem);
  }
}
tableHeader();

CookieStore.prototype.render = function () {


  this.avgCookie();
  let articleElem1 = document.createElement("tr");
  locationTable.appendChild(articleElem1);

  let tHelmement = document.createElement("td");
  tHelmement.textContent = this.name;
  articleElem1.appendChild(tHelmement);

  for (let i = 0; i < dailyHours.length; i++) {
    let tDelement = document.createElement("td");
    tDelement.textContent = `${this.purchedCookie[i]}`;
    articleElem1.appendChild(tDelement);
  }
};

function tableFooter (){
  let footerRow = document.createElement("tr");
  locationTable.appendChild(footerRow);

  let space = document.createElement("th");
  space.textContent = "";
  footerRow.appendChild(space);

  for(let i=0; i<dailyHours; i++){
    for(let j=0; j< purchedCookie[i].length; j++){
      total+= storeArr[j][i];
    }
  }
}
tableFooter();

let Seattle = new CookieStore("Seattle", 23, 65, 6.5);
let Dubai = new CookieStore("Dudai", 11, 38, 3.7);
let Tokyo = new CookieStore("Tokyo", 3, 24, 1.2);
let Paris = new CookieStore("Paris", 20, 38, 3.7);
let Lima = new CookieStore("Lima", 2, 16, 4.6);

//renders calls\

Seattle.render();
Dubai.render();
Tokyo.render();
Paris.render();
Lima.render();
console.log(storeArr);

// console.log(seattleLocation);
// console.log(tokyoLocation);
// console.log(dubaiLocation);
// console.log(parisLocation);
// console.log(limaLocation);

/*let seattleLocation = {
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
};






// **** GLOBALS / WINDOW INTO THE DOM *****

// **** HELPER FUNCTIONS - UTILITES *****

// ************ CONSTRUCTOR FUNCTION **********
/*
}*/

// ******* PROTOTYPE METHODS ********

// ****** TABLE DOM RENDERING ******

// tr would be your ul?????
