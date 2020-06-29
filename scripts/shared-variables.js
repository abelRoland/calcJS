'use strict';

console.log('--- loading: global variables');


let result = 0;
let answer = '';

function counting(value) {
    if (typeof value === 'number' || value === '.') {
        if (result === 0) {
            if (value === '.') {
                result = '0.';
            } else {
            result = String(value);
            }
        } else {       
            result += value;
        }
    }
    
    answer = document.getElementById("result").innerHTML = result;
}
 
function reset() {
    result = 0;
    answer = document.getElementById("result").innerHTML = result;
}