// DOM Vars
const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");

const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
// other vars
let isError = false;

const cleanInputString = (str) => {
  //   const strArray = str.split("");
  //   const cleanStrArray = [];
  //   for (let i = 0; i < strArray.length; i++) {
  //     if (!["+", "-", " "].includes(strArray[i])) {
  //       cleanStrArray.push(strArray[i]);
  //     }
  //   }
  // changing over to regex - checking for + - and whitespace character and continue looking after
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
};
const isInvalidInput = (str) => {
  const regex = /e[0-9]e/i;
};
cleanInputString();
