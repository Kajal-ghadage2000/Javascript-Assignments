/*
Write a JavaScript program to take an array as input from the user and:
a) Store all duplicate elements in a separate array
b) Remove the duplicate elements from the original array
Sample Input:
[ 1, 2, 3, 2, 3, 4, 5 ]
Output:
Duplicate Elements = [ 2, 3 ]
Array without duplicate elements = [ 1, 2, 3, 4, 5 ]
*/

var arr=[ 1, 2, 3, 2, 3, 4, 5 ]
var unique=[]
var duplicate=[]

arr.forEach(element => {
    if(unique.includes(element))
        duplicate.push(element)
    else
        unique.push(element)
});

console.log("Duplicate Elements = " + duplicate)
console.log("Array without duplicate elements ="+unique)