const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    // get all the dropdown values use spread to push in to array while converting to a number
    ...document.getElementsByClassName("values-dropdown"),
  ].map((dropdown) => Number(dropdown.value));
  //// call the sort method functions here
  // const sortedValues = bubbleSort(inputValues);
  // const sortedValues = selectionSort(inputValues);
  // const sortedValues = insertionSort(inputValues);
  // the built in js way
  const sortedValues = inputValues.sort((a, b) => {
    return a - b;
  });
  updateUI(sortedValues);
};
// pass in empty array when page loads, then when called get input numbers and display under output
const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
};

// the bubble sort way
const bubbleSort = (array) => {
  // iterate array
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      // this console.log will show the sort in action
      // console.log(array, array[j], array[j + 1]);
      //bubble up - check if current element > the next one
      if (array[j] > array[j + 1]) {
        // swap
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        // TODO this is a way from chat gpt that uses destructure instead of swap
        // [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      console.log(array, array[j], array[minIndex]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
};

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j]; // Move the element to the right
      j--;
    }
    // insert the current value into the sorted section of the array
    array[j + 1] = currValue;
  }
  return array;
};
sortButton.addEventListener("click", sortInputArray);
