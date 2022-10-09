/*
Write a JavaScript program to take 2 arrays from the user and check if the number 4 exists in any of the arrays, or both of the arrays.
Sample Input 1:
[ 1, 2, 3, 4, 5 ]
[ 4, 6, 1, 8, 2 ]
Output:

4 in both arrays
Sample Input 2:
[ 1, 2, 3, 6, 5 ]
[ 4, 6, 1, 8, 2 ]
Output:
4 in array 2
Sample Input 3:
[ 1, 2, 3, 4, 5 ]
[ 5, 6, 1, 8, 2 ]
Output:
4 in array 1
*/

function find_number(arr1,arr2,find_ele){

    if(arr1.includes(find_ele) && arr2.includes(find_ele))
        console.log("4 in both arrays")
    else if(arr1.includes(find_ele))
        console.log("4 in array 1")
    else if(arr2.includes(find_ele))
        console.log("4 in array 2")

}

find_number([ 1, 2, 3, 4, 5 ], [ 4, 6, 1, 8, 2 ], 4)
find_number([ 1, 2, 3, 6, 5 ], [ 4, 6, 1, 8, 2 ], 4)
find_number([ 1, 2, 3, 4, 5 ], [ 5, 6, 1, 8, 2 ], 4)