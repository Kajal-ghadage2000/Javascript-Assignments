/*
Write a JavaScript program to map Employee Records according to Employee
IDs.
Employee: { id, name, salary }
a) Print an array of all employee ids
b) Print count of employees
c) Print the name of the employee according to their id { key: value }
d) Store the salaries of all employees in an array
e) Calculate the average salary the company is paying to its employees
Sample Input:
"id": [ 67, 48, 29 ]
"name": [ "Hitanshu", “Ninad”, “Amandeep” ]
"salary": [ 75000, 82000, 98000 ]
Output:
[ 67, 48, 29 ]
3
67: Hitanshu
48: Ninad
29: Amandeep
[ 75000, 82000, 98000 ]
85000
*/ 
var id=[ 67, 48, 29 ], namelist=[ "Hitanshu", "Ninad", "Amandeep" ], salary=[ 75000, 82000, 98000 ];

console.log("Print an array of all employee ids: " + id +"\n")
console.log("Print count of employees: " + id.length +"\n")
console.log("Print the name of the employee according to their id { key: value } :")
for(var i=0; i<id.length; i++){
    console.log(id[i] +" : " + namelist[i] )
}
console.log("\nStore the salaries of all employees in an array :"+ salary)
var sum=salary.reduce((acc, value)=>{
    return acc+value;
},0)
console.log("\nCalculate the average salary the company is paying to its employees :"+ sum/id.length)