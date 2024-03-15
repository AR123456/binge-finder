const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currValue;
  }
  return array;
};
/* code explained by chat gpt 
This JavaScript code implements the insertion sort algorithm, which is a simple sorting algorithm that builds the final sorted array one item at a time. Here's a breakdown of how the code works:

1. The `insertionSort` function takes an array as its input parameter.

2. The outer loop iterates over each element of the array starting from the second element (`let i = 1`). The reason for starting from the second element is that the first element (at index 0) is considered already sorted.

3. Inside the loop, the current value being considered for insertion is stored in the variable `currValue`.

4. A variable `j` is initialized to `i - 1`, which points to the index of the element just before the current one.

5. A while loop runs as long as `j` is greater than or equal to 0 (ensuring we don't go out of bounds) and the value at `array[j]` is greater than `currValue`.

6. Within the while loop, each element that is greater than `currValue` is shifted one position to the right to make space for `currValue`.

7. After finding the correct position for `currValue`, it is inserted into the array at index `j + 1`.

8. This process continues until all elements of the array have been iterated over.

9. Finally, the sorted array is returned.

In summary, the insertion sort algorithm works by repeatedly taking elements from the unsorted part of the array and inserting them into their correct position in the sorted part of the array, effectively building the sorted array one element at a time.

*/
