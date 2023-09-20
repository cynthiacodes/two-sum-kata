/**
params 1: number [];
params 2: number;
return: number [];

for loop: [i] to loop over the nums(
    for loop:[j] to loop over the nums where is start 1 bigger then [i](i.e.i+1) (
     variable sum = we add nums[i] and nums[j]
     if sum = target
     return [i,j]
    )
)
 */

import { generateWorstCaseArray } from "./generateWorstCaseArray";

function twoSum(nums: number[], target: number): number[] {
    let result: [number, number] = [0, 0];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            if (sum === target) {
                result = [i, j];
            }
        }
    }

    return result;
}

//test
// console.log(
//     "function twoSum ",
//     twoSum([2, 7, 11, 15], 9),
//     "should return [0,1]"
// );
// console.log("function twoSum ", twoSum([3, 2, 4], 6), "should return [1,2]");
// console.log("function twoSum ", twoSum([3, 3], 6), "should return [0,1]");

let n = 10;
for (let i = 0; i < 10; i++) {
    const { arr, targetSum } = generateWorstCaseArray(n);

    const startTime = performance.now();
    twoSum(arr, targetSum);
    const stopTime = performance.now();
    const elapsedTime = stopTime - startTime;

    console.log(`${n} elements,${elapsedTime}`);

    n *= 10;
}
