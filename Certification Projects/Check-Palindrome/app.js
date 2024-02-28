const input = document.querySelector("#text-input");
const button = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const checkForPalindrome = (e) => {
  if (input.value === "") {
    alert("Please input a value");
  } else {
    // remove any non alphabet characters from the input
    cleanInput = input.value
      .trim()
      .toLowerCase()
      .replace(/[^a-z]/g, "");

    if (cleanInput === "a") {
      result.innerHTML = "A is a palindrome";
    } else {
      //
    }
  }
};

button.addEventListener("click", checkForPalindrome);
