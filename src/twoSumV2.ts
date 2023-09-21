// for each num of the array
//     array.indexOf(target - num)

import { generateWorstCaseArray } from "./generateWorstCaseArray";

function twoSumV2(numArray: number[], targetSum: number) {
    let indicesArray: number[] = [];
    for (let i = 0; i < numArray.length; i++) {
        let index = numArray.indexOf(targetSum - numArray[i]);
        let eachNumIndex = i;
        if (index !== -1 && index !== eachNumIndex) {
            indicesArray.push(index, eachNumIndex);
            return indicesArray;
        }
    }
}

// test
// console.log(
//     "function twoSumV2 ",
//     twoSumV2([2, 7, 11, 15], 9),
//     "should return [0,1]"
// );
// console.log(
//     "function twoSumV2 ",
//     twoSumV2([3, 2, 4], 6),
//     "should return [1,2]"
// );
// console.log("function twoSumV2 ", twoSumV2([3, 3], 6), "should return [0,1]");

let n = 10;
for (let i = 0; i < 10; i++) {
    const { arr, targetSum } = generateWorstCaseArray(n);

    const startTime = performance.now();
    twoSumV2(arr, targetSum);
    const stopTime = performance.now();
    const elapsedTime = stopTime - startTime;

    console.log(`${n} elements,${elapsedTime}`);

    n *= 10;
}
