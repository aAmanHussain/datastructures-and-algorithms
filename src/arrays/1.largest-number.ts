/**
 * Explanation:
 * Given an array A[] of size n. The task is to find the largest element in it.
 * 
 * 
 * Input: arr = [1, 8, 7, 56, 90]
 * Output: 90
 * Explanation:
 * The largest element of given array is 90.
 * 
 * 
 * Input: arr = [1, 2, 0, 3, 2, 4, 5]
 * Output: 5
 * Explanation:
 * The largest element of given array is 5.
 */

export const largest1 = (arr: number[]): number => {
    let [ max ] = arr;
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    return max;
};

export const largest2 = (arr: number[]): number => arr.reduce((max: number, current: number) => Math.max(max, current), -Infinity);

export const largest3 = (arr: number[]): number => Math.max(...arr);



let input = [1, 118, 7, 56, 90];
let largestResult = largest1(input);
console.log(`Largest number in ${input} = ${largestResult}`);


input = [1, 2, 0, 3, 2, 4, 5];
largestResult = largest3(input);
console.log(`Largest number in ${input} = ${largestResult}`);