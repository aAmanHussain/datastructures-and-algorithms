/**
 * Explanation:
 * You are given an array arr[], you have to re-construct an array arr[].
 * The values in arr[] are obtained by doing OR(bitwise or) of consecutive elements in the array.
 *
 *
 * Input: arr = [10, 11, 1, 2, 3]
 * Output : [11, 11, 3, 3, 3]
 * Explanation:
 * At index 0, arr[0] or arr[1] = 11,
 * At index 1, arr[1] or arr[2] = 11,
 * At index 2, arr[2] or arr[3] = 3...
 * At index 4, No element is left So, it will remain as it is.
 * New Array will be [11, 11, 3, 3, 3].
 *
 *
 * Input: arr = [5, 9, 2, 6]
 * Output: [13, 11, 6, 6]
 */

 const gameWithNumber = (arr: number[]): number[] => {
  const xor = arr.map((num: number, index: number) => {
    if (index === arr.length - 1) {
      return num;
    }

    return num | arr[index + 1];
  });

  return xor;
};

let input = [10, 11, 1, 2, 3];
let gameWithNumberResult = gameWithNumber(input);
console.log(`OR array of ${input} = ${gameWithNumberResult}`);

input = [5, 9, 2, 6];
gameWithNumberResult = gameWithNumber(input);
console.log(`OR array of ${input} = ${gameWithNumberResult}`);