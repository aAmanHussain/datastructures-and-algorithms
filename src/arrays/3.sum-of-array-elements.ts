/**
 * Explanation:
 * Given an array of N integers. Your task is to print the sum of all of the integers.
 *
 *
 * Input: arr = [1, 2, 3, 4]
 * Output: 10
 *
 *
 * Input: arr = [5, 8, 3, 10, 22, 45]
 * Output: 93
 */

const getSum1 = (arr: number[]): number => {
  let sum = 0;
  
  arr.forEach((num: number) => sum += num);

  return sum;
};


const getSum2 = (arr: number[]): number => arr.reduce((total: number, num: number) => total + num, 0);
  

let input = [1, 2, 3, 4];
let getSumResult = getSum2(input);
console.log(`Summation pf ${input} = ${getSumResult}`);

input = [5, 8, 3, 10, 22, 45];
getSumResult = getSum2(input);
console.log(`Summation pf ${input} = ${getSumResult}`);
