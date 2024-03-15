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
/* explination of this code from chat gpt 
This JavaScript function `selectionSort` implements the Selection Sort algorithm. Here's how it works:

1. **Initialization**: It starts by iterating through the array from the first element (`i = 0`) to the second-to-last element (`i < array.length`). This loop is responsible for selecting the minimum element from the unsorted portion of the array.

2. **Inner Loop**: Within the outer loop, there is an inner loop that starts from the next element after the current one (`j = i + 1`) and iterates through the rest of the array (`j < array.length`). This loop compares each element with the element at the current minimum index (`minIndex`).

3. **Finding the Minimum**: During each iteration of the inner loop, if the current element (`array[j]`) is less than the element at the current minimum index (`array[minIndex]`), it updates the `minIndex` to the index of the current element (`j`).

4. **Swapping**: After finding the minimum element in the unsorted portion of the array, it swaps the minimum element with the element at the current position (`i`). This ensures that the smallest unsorted element is moved to its correct position in the sorted portion of the array.

5. **Repeat**: This process continues until the entire array is sorted. After each iteration of the outer loop, one more element is added to the sorted portion of the array, and one less element remains in the unsorted portion.

6. **Return Sorted Array**: Finally, the function returns the sorted array.

This algorithm has a time complexity of O(n^2), where 'n' is the number of elements in the array, making it inefficient for large arrays. However, it is simple and easy to implement.


*/
