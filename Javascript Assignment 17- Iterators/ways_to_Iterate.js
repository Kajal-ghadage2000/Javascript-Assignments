array = [ 5, 8, 3, 4, 1 ];

//while loop
console.log("\nWhile loop")
index = 0;
while (index < array.length) {
    console.log(array[index]);
    index++;
}

//do while loop
console.log("\nDo-While loop")
index = 0;
do{
    console.log(array[index]);
    index++;
}while (index < array.length) 


//for loop
console.log("\nFor loop")
for (index = 0; index < array.length; index++) {
    console.log(array[index]);
}

//for each
console.log("\nFor each loop")
array.forEach((element,index)=>{
    console.log(index +" -> "+element)
})

//for..in
console.log("\nFor..in Loop -- Loops the properties of an object(index)")
for(var i in array){
    console.log(i +" : "+array[i])
}

//for..of
console.log("\nFor..of Loop -- Loops the values of any iterable   ")
for(var i of array){
    console.log(i)
}


//map
console.log("\nMap")
const arr_map=array.map((num)=>{
    return num*2;
})
console.log("Multiply array by 2 using map: "+arr_map)

//filter
console.log("\nFilter")
const arr_filter=array.filter((num)=>{
    return num>=3;
})
console.log("Array after performing filter based on condition num>=3  result: "+arr_filter)

//Reduce
console.log("\nReduce")
const arr_reduce=array.reduce((acc, num)=>{
    return acc+num;
},0)
console.log("Sum of all array element using reduce is: "+ arr_reduce)

//Using every method. 
//The every() method checks if all elements in an array pass a test (provided as a function).
console.log("\nEvery() method") 
const greaterThanFive= (x)=>{
    x>5
}
if(array.every(greaterThanFive)){
    console.log("All elements are greater than Five")
}
else{
    console.log("At least one/all element is/are not greater than five")
}