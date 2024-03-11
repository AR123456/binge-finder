const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const countDownAndUp = (number) => {
  console.log(number, "outside if");
  if (number === 0) {
    console.log("Reached base case");
    return;
  } else {
    countDownAndUp(number - 1);
    console.log(number, "inside else");
  }
};
countDownAndUp(3);

const decimalToBinary = (input) => {
  let binary = "";
  if (input === 0) {
    binary = "0";
  }
  result.innerText = binary;
  while (input > 0) {
    input = Math.floor(input / 2);
    binary = (input % 2) + binary;
  }
};

const checkUserInput = () => {
  // checking for empty string which is faulsy, or not an integer with parseInt wrapped in isNaN
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number");
    return;
  }
  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
