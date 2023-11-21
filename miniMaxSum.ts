'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;


process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
    // Write your code here
    let length: number = arr.length;
    let minSum: number = 0;
    let maxSum: number;
    arr = sortArray(arr);
    minSum = arr[0]+arr[1]+arr[2]+arr[3];
    maxSum = arr[1]+arr[2]+arr[3]+arr[4];
    
    console.log(minSum, maxSum);
}

function sortArray(arr: number[]): number[] {
    let j_min: number = 0;
    for(let i: number = 0; i < arr.length; i++){
        j_min = i;
        for(let j: number = i + 1; j < arr.length; j++){
            if(arr[j] < arr[j_min]){
                j_min = j;
            }
        }
        if(j_min !== i){
            let temp: number = arr[i];
            arr[i] = arr[j_min];
            arr[j_min] = temp;
        }
    }
    
    
    return arr;
}

function main() {

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
