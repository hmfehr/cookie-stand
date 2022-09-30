"use strict";



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
let tableElm= document.getElementById("store-location");
let formElement= document.getElementById("addStore");
let tableFooter= document.createElement("tableFooter");
//let tableElm = document.getElementById("store-location");
// let storeArr = [];
// let tableElm = document.createElement("table");
// locationTable.appendChild(tableElm);
// console.dir(dailyHours);

function CookieStore(name, minCust, maxCust, avgSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.customerNumber = [];
  this.purchedCookie = [];
  this.total = 0;
  CookieStore.all.push(this);
}
//customers per hour.
CookieStore.prototype.caculateCustomerNumber = function () {
  for (let i = 0; i < dailyHours.length; i++) {
    this.customerNumber.push(getRandomCus(this.maxCust, this.minCust));
  }
};

//cookies per hour.
CookieStore.prototype.caculatePurchedCookie = function () {
  this.caculateCustomerNumber();
  for (let i = 0; i < dailyHours.length; i++) {
    let onTheHour = Math.ceil(this.customerNumber[i] * this.avgSales);
    this.purchedCookie.push(onTheHour);
    this.total += onTheHour;
  }
};

//render cookie stores.
CookieStore.prototype.render = function () {
  this.caculatePurchedCookie();
  const tableRow = document.createElement("tr");
  let tableDataElement = document.createElement("td");
  tableDataElement.textContent = this.name;
  tableRow.appendChild(tableDataElement);
  for (let i = 0; i < dailyHours.length; i++) {
    tableDataElement = document.createElement("td");
    tableDataElement.textContent = this.purchedCookie[i];
    tableRow.appendChild(tableDataElement);
  }
  const tableHeader = document.createElement("th");
  tableHeader.textContent = this.total;
  tableRow.appendChild(tableHeader);
  tableElm.appendChild(tableRow);
};

//cookiestores
CookieStore.all = [];
new CookieStore("Seattle", 23, 65, 6.5);
new CookieStore("Dudai", 11, 38, 3.7);
new CookieStore("Tokyo", 3, 24, 1.2);
new CookieStore("Paris", 20, 38, 3.7);
new CookieStore("Lima", 2, 16, 4.6);

//randomize.
function getRandomCus(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// DOM
function tableHeader() {
  let tableRow = document.createElement("tr");
  let tableHeader = document.createElement("th");
  tableHeader.textContent = "Locations";
  tableRow.appendChild(tableHeader);
  for (let i = 0; i < dailyHours.length; i++) {
    tableHeader = document.createElement("th");
    tableHeader.textContent = dailyHours[i];
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement("th");
  tableHeader.textContent = "Location total";
  tableRow.appendChild(tableHeader);
  tableElm.appendChild(tableRow);
}

function renderTableFooter() {
  let tableRow = document.createElement("tr");
  let tableHeader = document.createElement("th");
  tableHeader.textContent = "Grand Total";
  tableRow.appendChild(tableHeader);
  let grandTotal = 0;
  for (let i = 0; i < dailyHours.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < CookieStore.all.length; j++) {
      hourTotal += CookieStore.all[j].purchedCookie[i];
      grandTotal += CookieStore.all[j].purchedCookie[i];
    }
    tableHeader = document.createElement("th");
    tableHeader.textContent = hourTotal;
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement("th");
  tableHeader.textContent = grandTotal;
  tableFooter.appendChild(tableRow);
  tableRow.appendChild(tableHeader);
  tableElm.appendChild(tableFooter);
}

function handleForm(e) {
  e.preventDefault();
  const name = e.target.name.value;

  const minCust =parseInt(e.target.minCust.value);
  const maxCust = parseInt(e.target.maxCust.value);
  const avgSales = parseInt(e.target.avgSales.value);

  const CookieStore = new CookieStore(name, minCust, maxCust, avgSales);

  e.target.name.value = null;
  e.target.minCust.value = null;
  e.target.maxCust.value = null;
  e.target.avgSales.value = null;

  renderTableFooter.innerHTML = "";

  renderTableFooter();
}



formElement.addEventListener("click", handleForm);

(function renderTable() {
  tableHeader();
  for (let i = 0; i < CookieStore.all.length; i++) {
    CookieStore.all[i].render();
  }
  renderTableFooter();
})();





//renders calls\

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
