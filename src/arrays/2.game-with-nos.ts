/**
 * Explanation:
 * You are given an array arr[], you have to re-construct an array arr[]. The values in arr[] are obtained by doing Xor of consecutive elements in the array.
 *
 *
 * Input: arr = [10, 11, 1, 2, 3]
 * Output: [1 10 3 1 3]
 * Explanation:
 * At index 0, arr[0] xor arr[1] = 1,
 * At index 1, arr[1] xor arr[2] = 10,
 * At index 2, arr[2] xor arr[3] = 3, ...,
 * At index 4, No element is left So, it will remain as it is.
 * New Array will be [1, 10, 3, 1, 3]
 *
 *
 * Input: arr = [5, 9, 7, 6]
 * Output: [12 14 1 6]
 */

const gameWithNumber = (arr: number[]): number[] => {
  const xor = arr.map((num: number, index: number) => {
    if (index === arr.length - 1) {
      return num;
    }

    return num ^ arr[index + 1];
  });

  return xor;
};

let input = [10, 11, 1, 2, 3];
let gameWithNumberResult = gameWithNumber(input);
console.log(`XOR array of ${input} = ${gameWithNumberResult}`);

input = [5, 9, 7, 6];
gameWithNumberResult = gameWithNumber(input);
console.log(`XOR array of ${input} = ${gameWithNumberResult}`);
