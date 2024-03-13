// consts
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const validateUserInput = () => {
  if (!numberInput.value) {
    output.classList.remove("hidden");
    output.innerText = "Please enter a valid number";
    return;
  }
  // check for number
  if (isNaN(parseInt(numberInput.value))) {
    output.classList.remove("hidden");
    output.innerText = "Please enter a valid number";
    return;
  }
  // check for positive number
  if (numberInput.value < 1) {
    output.classList.remove("hidden");
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }
  // check that number is no more than 4000
  if (numberInput.value > 3999) {
    output.classList.remove("hidden");
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }
  const raw = numberInput.value;
  convertToRoman(raw);
};
const convertToRoman = (raw) => {
  console.log(raw);
  var digits = String(+raw).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ],
    roman = "",
    i = 3;
  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;

  console.log(Array(+digits.join("") + 1).join("M") + roman);
  const outputForDisplay = Array(+digits.join("") + 1).join("M") + roman;
  output.classList.remove("hidden");
  output.innerText = outputForDisplay;
};
convertBtn.addEventListener("click", validateUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    validateUserInput();
  }
});
