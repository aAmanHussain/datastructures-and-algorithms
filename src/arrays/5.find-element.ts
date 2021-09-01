/**
 * Explanation:
 * Given an array A[] of N integers and an index Key. Your task is to print the element present at index key in the array.
 *
 *
 * Input: index = 2, arr = [10, 20, 30, 40, 50]
 * Output : 30
 *
 *
 * Input: index = 4, arr = [10, 20, 30, 40, 50, 60, 70]
 * Output: 50
 */

const findElementAtIndex = (arr: number[], idx: number): number => arr[idx];


let input = [10, 20, 30, 40, 50];
let index = 2;
let findElementAtIndexResult = findElementAtIndex(input, index);
console.log(`Element at ${index} for ${input} = ${findElementAtIndexResult}`);

input = [10, 20, 30, 40, 50, 60, 70];
index = 4;
findElementAtIndexResult = findElementAtIndex(input, index);
console.log(`Element at ${index} for ${input} = ${findElementAtIndexResult}`);