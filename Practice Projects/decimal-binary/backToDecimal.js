const binaryToDecimal = (binaryString) => {
  // Initialize the decimal result
  let decimal = 0;

  // Iterate through each bit of the binary string
  for (let i = 0; i < binaryString.length; i++) {
    // Convert the character at position i to a number (0 or 1)
    const bit = parseInt(binaryString.charAt(i));

    // Calculate the contribution of this bit to the decimal value
    const power = binaryString.length - 1 - i;
    const contribution = bit * Math.pow(2, power);

    // Add the contribution to the decimal value
    decimal += contribution;
  }

  // Return the decimal value
  return decimal;
};
console.log(binaryToDecimal("1010")); // Output: 10
console.log(binaryToDecimal("1101")); // Output: 13
console.log(binaryToDecimal("101000")); // Output: 40
