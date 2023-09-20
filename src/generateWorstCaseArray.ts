export function generateWorstCaseArray(desiredLen: number): {
    arr: number[];
    targetSum: number;
} {
    const arr: number[] = [];
    for (let i = 0; i < desiredLen; i++) {
        arr.push(1);
    }
    arr[arr.length - 1] = 6;
    arr[arr.length - 2] = 4;
    return { arr, targetSum: 10 };
}
