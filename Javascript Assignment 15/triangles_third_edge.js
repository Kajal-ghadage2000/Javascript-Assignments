/*
Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.
Examples
nextEdge(8, 10) ➞ 17
nextEdge(5, 7) ➞ 11
nextEdge(9, 2) ➞ 10
Notes
● (side1 + side2) - 1 = maximum range of third edge.
● The side lengths of the triangle are positive integers.
● Don't forget to return the result.
*/

function findThirdSide(side1, side2){
    var side3=(side1+side2)-1
    return side3;
}

console.log("the maximum range of a triangle's third edge is :"+ findThirdSide(8,10))
console.log("the maximum range of a triangle's third edge is :"+ findThirdSide(5,7))
console.log("the maximum range of a triangle's third edge is :"+ findThirdSide(9,2))