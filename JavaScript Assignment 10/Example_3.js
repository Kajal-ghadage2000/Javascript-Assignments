/*Give an example of a Higher Order function and a call back function used in the same program.
Higher Order function ==> numbers function
call back function ==> add function
*/

function add(x, y){
  return x + y;
}
function numbers(fn, x, y){
  return fn(x, y);
}
var addResult = numbers(add, 3, 2);
console.log(addResult)