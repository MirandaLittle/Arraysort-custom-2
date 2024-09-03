'use strict';

const femaleHeadsOfState = [
  {
    name: "Khertek Anchimaa-Toka",
    country: "Tannu Tuva",
    totalTermLengthYears: 4
  },
  {
    name: "Sirimavo Bandaranaike",
    country: "Ceylon/Sri Lanka",
    totalTermLengthYears: 16
  },
  {
    name: "Indira Gandhi",
    country: "India",
    totalTermLengthYears: 15
  },
  {
    name: "Golda Meir",
    country: "Israel",
    totalTermLengthYears: 5
  },
  {
    name: "Isabel Perón",
    country: "Argentina",
    totalTermLengthYears: 1
  },
  {
    name: "Elisabeth Domitien",
    country: "Central African Republic",
    totalTermLengthYears: 1
  },
  {
    name: "Vigdís Finnbogadóttir",
    country: "Iceland",
    totalTermLengthYears: 16
  }
];

// 1
const compareByName = (person1, person2) => {
  if (person1.name > person2.name) return 1;
  if (person1.name < person2.name) return -1;
  return 0;
};

femaleHeadsOfState.sort(compareByName);
console.log("Sorted by name");
console.log(femaleHeadsOfState);

// 2
const compareByCountry = (person1, person2) => {
  if (person1.country > person2.country) return 1;
  if (person1.country < person2.country) return -1;
  return 0;
};

femaleHeadsOfState.sort(compareByCountry);
console.log("Sorted by country");
console.log(femaleHeadsOfState);

// 3
const compareByTermThenCountryReversed = (person1, person2) => {
  if (person1.totalTermLengthYears > person2.totalTermLengthYears) return 1;
  if (person1.totalTermLengthYears < person2.totalTermLengthYears) return -1;
  
  if (person1.country < person2.country) return 1;
  if (person1.country > person2.country) return -1;
  return 0;
};

femaleHeadsOfState.sort(compareByTermThenCountryReversed);
console.log("Sorted by term length, then country reversed");
console.log(femaleHeadsOfState);