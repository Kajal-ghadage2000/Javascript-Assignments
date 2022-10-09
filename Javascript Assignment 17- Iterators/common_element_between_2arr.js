/*In the following two arrays find which two elements match using iterators.
Array 1 - ['a', 'b', 'c', 'd','j']
Array 2 - ['e', 'f', 'g', 'h', 'a', 'i', 'j']*/

const arr1=['a', 'b', 'c', 'd','j']
const arr2=['e', 'f', 'g', 'h', 'a', 'i', 'j']
var new_arr=[]

for(var i=0; i < arr1.length; i++){
    if(arr2.includes(arr1[i]))
        new_arr.push(arr1[i])
}

console.log(new_arr)