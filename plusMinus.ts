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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
    // Write your code here
    let arrPositive: number[] = [];
    let arrNegative: number[] = [];
    let arrZero: number[] = [];
    for (let i: number = 0; i< arr.length; i++){
        if (arr[i] == 0){
            arrZero.push(arr[i]);
        }
        
        if (arr[i] > 0){
            arrPositive.push(arr[i]);
        }
        
        if (arr[i] < 0){
            arrNegative.push(arr[i]);
        }
    }
    
    console.log(arrPositive.length/arr.length);
    console.log(arrNegative.length/arr.length);
    console.log(arrZero.length/arr.length);
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
