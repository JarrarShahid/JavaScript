// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here

    let arrLength = arr.length
    let plus = 0
    let minus = 0
    let zero = 0
    for(let i = 0; i<arr.length;i++){
        if(arr[i]>0){
            plus += 1
        }
        if(arr[i]<0){
            minus +=1
        }
        if(arr[i]==0){
            zero += 1
        }
    }
    plus = plus/arrLength
    minus = minus/arrLength
    zero = zero/arrLength

    console.log(plus.toFixed(6));
    console.log(minus.toFixed(6));
    console.log(zero.toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
