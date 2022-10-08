/*
Write a javascript function find_largest to return the nth largest number in an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]
find_largest(3) will return third largest number from the above array - which is 8.
*/

/*
OUTPUT
[3, 45, 6, 7, 23,  5, 7, 8]
3 Largest element value in array is 8
*/

function find_largest(index){
    const arr=[3,45,6,7,23,5,7,8]
    console.log(arr)
    arr.sort(function(a, b){return b - a})
    console.log(index+ " Largest element value in array is "+ arr[index-1])
}

find_largest(3)