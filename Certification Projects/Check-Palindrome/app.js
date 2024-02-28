const input = document.querySelector("#text-input");
const button = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const checkForPalindrome = (e) => {
  if (input.value === "") {
    alert("Please input a value");
  } else {
    // remove any non alphabet characters from the input
    cleanInput = input.value.toLowerCase().replace(/[^a-z]/g, "");

    if (cleanInput === "a") {
      console.log("A is a palindrome");
    } else {
      //  Code Camp palindrome checker   https://www.freecodecamp.org/news/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7/
      // check for palindrome
    }
  }
};

button.addEventListener("click", checkForPalindrome);
