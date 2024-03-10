const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const decimalToBinary = (input) => {
  let binary = "";
  // const inputs = [];
  // const quotients = [];
  // const remainders = [];
  // if (input === 0) {
  //   result.innerText = "0";
  //   return;
  // }
  // while (input > 0) {
  //   const quotient = Math.floor(input / 2);
  //   const remainder = input % 2;

  //   inputs.push(input);
  //   quotients.push(quotient);
  //   remainders.push(remainder);
  //   result.innerText = remainders.reverse().join("");
  //   input = quotient;
  // }
  // console.log("Inputs: ", inputs);
  // console.log("Quotients: ", quotients);
  // console.log("Remainders: ", remainders);
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
