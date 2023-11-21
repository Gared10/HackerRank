'use strict';

import { WriteStream, createWriteStream } from "fs";
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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let firstDiagonal: number = 0;
    let secondDiagonal: number = 0;
    let diff: number = 0;
    for(let i: number = 0; i < arr.length; i++){
        for(let j: number = 0; j < arr.length; j++){
            if (i==j){
                firstDiagonal += arr[i][j];
            }
            
            if (i+j == arr.length-1){
                secondDiagonal += arr[i][j];
            }
        }
    }
    console.log("Primeira diagonal", firstDiagonal);
    console.log("Segunda diagonal", secondDiagonal);
    return Math.abs(firstDiagonal-secondDiagonal);
}

function main() {
    const outputPath: string = process.env.OUTPUT_PATH ?? '%temp%';
    const ws: WriteStream = createWriteStream(outputPath);

    const n: number = parseInt(readLine().trim(), 10);

    let arr: number[][] = Array(n);

    for (let i: number = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result: number = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
