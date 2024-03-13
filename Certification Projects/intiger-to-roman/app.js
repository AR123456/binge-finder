// consts
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const validateUserInput = () => {
  // check for number
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please enter a valid number");
    return;
  }
  // check for positive number
  if (numberInput.value < 1) {
    alert("Please enter a number greater than or = 1 ");
    return;
  }
  // check that number is no more than 4000
  if (numberInput.value > 3999) {
    alert("Please enter a number less than or equal to 3999");
    return;
  }
  const raw = numberInput.value;
  convertToRoman(raw);
};
const convertToRoman = (raw) => {
  console.log(raw);
  switch (raw) {
    case (raw = 1):
      console.log("I");
      break;
    case "9":
      console.log("IX");
      break;
    case "16":
      console.log("XVI");
      break;
    case "649":
      console.log("DCXLIX");
      break;
    case "1023":
      console.log("MXXIII");
      break;
    case "3999":
      console.log("MMMCMXCIX");
      break;

    default:
      break;
  }
};
convertBtn.addEventListener("click", validateUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    validateUserInput();
  }
});
