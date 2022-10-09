//Can we put duplicate values in the set object ?
//->Set objects are collections of values. A value in the Set may only occur once; it is unique in the Set's collection.

//Creating new set object
const myset=new Set()
//Adding new element to set object
myset.add(10)
myset.add(50)
myset.add(50)
myset.add(70)

console.log("Set before performing delete operation")
myset.forEach((value) => {
    console.log(value);
  });

//Deleting element from set object
myset.delete(70)

console.log("\nSet after performing delete operation")
myset.forEach((value) => {
    console.log(value);
  });