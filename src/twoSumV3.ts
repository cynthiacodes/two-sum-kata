function twoSumV3(numArray: number[], targetSum: number) {
    const indicesObj: {} = {};

    for (let i = 0; i < numArray.length; i++) {
        let complement = targetSum - numArray[i];
        if (!complement in indicesObj) {
            indicesObj[numArray[i]] = i;
        } else {
            return [indicesObj[complement], i];
        }
    }
}
