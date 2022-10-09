/*
Create a set object with four random numbers from 0 to 10. 
Check if this newly created set object has 8 in it. Use set object methods.
*/

const myset_new=new Set();

while(myset_new.size<4){
    myset_new.add(Math.round((Math.random()*10)+1))
}

console.log("Content of set object: ")
myset_new.forEach(Element=>{
    console.log(Element)
})

if(myset_new.has(8))
console.log("\nNewly created set object has 8")
else
console.log("\nNewly created set object does not has 8")