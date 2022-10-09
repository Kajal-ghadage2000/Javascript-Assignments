/*
Write a JavaScript program to flatten the array, ie, turns a deep array into a plain
array.
Note: Do not use array.flat();
Sample Input:
[ 1, 2, [ 3, 4, [ 5 ] ] ]
Output:
[ 1, 2, 3, 4, 5 ]
*/

var arr=[ 1, 2, [ 3, 4, [ 5 ] ] ]

const flatten=(arr)=>{
    new_arr=arr.reduce((acc, num)=>{
        if(Array.isArray(num)){
            acc=acc.concat(flatten(num));
        }
        else{
            //acc.push(num);
            //OR
            //spread operator - allows us to quickly copy all or part of an existing array or object into another array or object.
            acc=[...acc, num]
        }
        return acc;
    },[])
    return new_arr;
}

console.log(flatten(arr))