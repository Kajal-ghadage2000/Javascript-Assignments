/*Write a JavaScript program to:
a) filter employees according to department = IT
b) filter employees who earn a salary < 65000
Sample Input:
let employees = [
{
"id": 1,
"name":"Abhinav",
"department":"IT",
"Salary":75000
},
{
"id": 2,
"name":"Gaurav",
"department":"Sales",
"Salary":52000
},
{
"id": 3,
"name":"Raj",
"department":"IT",
"Salary":64000
}]
Output:
[
  { id: 1, name: 'Abhinav', department: 'IT', Salary: 75000 },
  { id: 3, name: 'Raj', department: 'IT', Salary: 64000 }
]
[
  { id: 2, name: 'Gaurav', department: 'Sales', Salary: 52000 },
  { id: 3, name: 'Raj', department: 'IT', Salary: 64000 }
]*/

let employees = [
    {
    "id": 1,
    "name":"Abhinav",
    "department":"IT",
    "Salary":75000
    },
    {
    "id": 2,
    "name":"Gaurav",
    "department":"Sales",
    "Salary":52000
    },
    {
    "id": 3,
    "name":"Raj",
    "department":"IT",
    "Salary":64000
    }]
var dept=[]
var salary_data=[]
for(var i in employees){
    if(employees[i].department=="IT")
        dept.push(employees[i])
}
for(var i in employees){
    if(employees[i].Salary<65000)
        salary_data.push(employees[i])
}
console.log(dept)
console.log(salary_data)