//You are given an unordered array of unique integers incrementing from . You can swap any two elements a limited number of times. Determine the largest lexicographical value array that can be created by executing no more than the limited number of swaps.

'use strict';

const fs = require('fs');

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
 * Complete the 'largestPermutation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function largestPermutation(k, arr) {
    // Write your code here

    const n = arr.length;
    let position = new Array(n + 1); // To store positions, 1-based index
    let largest = n; // To keep track of the largest remaining number to place
    
    // Fill position array with current indices of elements
    for (let i = 0; i < n; i++) {
        position[arr[i]] = i;
    }
    
    for (let i = 0; i < n && k > 0; i++) {
        if (arr[i] !== largest) {
            // Swap arr[i] with the largest remaining number
            let current_index = position[arr[i]];
            let largest_index = position[largest];
            
            // Update positions in the position map
            position[arr[i]] = largest_index;
            position[largest] = current_index;
            
            // Swap elements in arr
            [arr[i], arr[largest_index]] = [arr[largest_index], arr[i]];
            
            // Decrement k after a swap
            k--;
        }
        largest--; // Move to the next largest element
    }
    
    return arr;
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = largestPermutation(k, arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
