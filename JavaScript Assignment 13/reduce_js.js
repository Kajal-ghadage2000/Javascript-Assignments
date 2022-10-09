/*
Write a JavaScript program to get an array from the user and return the:
a) Sum of all elements in the array using reduce()
b) Average of all elements in the array using reduce()
Sample Input:
[ 1, 2, 3, 4, 5 ]
Output:
15
3
*/
var arr=[ 1, 2, 3, 4, 5 ]
var result=arr.reduce((acc,num)=>{
    return acc+num;
},0)
console.log(result)

// average of the numbers
var avg = result / arr.length;
console.log(avg)