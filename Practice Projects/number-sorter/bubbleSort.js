const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        // swap
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};
/* code explained by chat gpt
This code is another implementation of the Bubble Sort algorithm in JavaScript, using a slightly different approach compared to the previous implementation. Let's break it down:

```javascript
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        // swap
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};
```

- `bubbleSort`: This is a function declaration using arrow function syntax. It takes an array `array` as input and sorts it using the Bubble Sort algorithm.

- The outer loop `for (let i = 0; i < array.length; i++)` iterates over the array from the first element to the last one. This loop controls the number of passes through the array.

- The inner loop `for (let j = 0; j < array.length - 1; j++)` iterates over the array from the first element to the second-to-last element. This loop compares adjacent elements and swaps them if they are in the wrong order.

- Inside the inner loop, there's an `if` statement that checks whether `array[j]` is greater than `array[j + 1]`. If it is, it means the two elements are in the wrong order and need to be swapped.

- The swap operation is done using a temporary variable `temp`. The value of `array[j]` is stored in `temp`, then `array[j]` is assigned the value of `array[j + 1]`, and finally `array[j + 1]` is assigned the value of `temp`. This effectively swaps the values of `array[j]` and `array[j + 1]`.

- After completing both loops, the sorted array is returned.

This implementation follows the same logic as the previous one but uses a temporary variable for swapping instead of destructuring assignment. Both implementations achieve the same result - sorting the array using the Bubble Sort algorithm.

*/
