import { observable, computed } from 'mobx'

let Store = observable({
  companies: []
});
let companies = [
  {name: "una"},
  {name: "dos"},
  {name: "tres"},
  {name: "cuatro"},
  {name: "cinco"},
  {name: "seis"},
];

// Testing
const dataInterval = setInterval(() => {
  if (companies.length) {
    let company = companies.shift()
    console.log('adding ', company);
    Store.companies.push(company);
  } else {
    console.log('clearing interval')
    clearInterval(dataInterval);
  }
}, 1000);

export default Store