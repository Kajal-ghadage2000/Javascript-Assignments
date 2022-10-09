/*
Write a JavaScript program to filter the hospitals according to:
a) Number of Beds > 200
b) Availability of Beds = Yes
c) Location = Pune

Sample Input:
let hospitals = [
{
"id": 1,
"name":"Hospital A",
"location":"Delhi",
"noOfBeds":450,
'availability':'Yes'
},
{
"id": 2,
"name":"Hospital B",

"location":"Pune",
"noOfBeds":150,
'availability':'No'
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350.
'availability':'Yes'
}]
Output:
[
{
"id": 1,
"name":"Hospital
A",
"location":"Delhi",
"noOfBeds":450,
'availability':'Yes'
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350,
'availability':'Yes'
}
]
[
{
"id": 1,
"name":"Hospital
A",
"location":"Delhi",

"noOfBeds":450,
'availability':'Yes'
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350,
'availability':'Yes'
}
]
[
{
"id": 2,
"name":"Hospital B",
"location":"Pune",
"noOfBeds":150,
'availability':'No'
},
{
"id": 3,
"name":"Hospital
C",
"location":"Pune",
"noOfBeds":350,
'availability':'Yes'
}
]
*/

let hospitals = [
    {
    "id": 1,
    "name":"Hospital A",
    "location":"Delhi",
    "noOfBeds":450,
    "availability":'Yes'
    },
    {
    "id": 2,
    "name":"Hospital B",
    "location":"Pune",
    "noOfBeds":150,
    'availability':'No'
    },
    {
    "id": 3,
    "name":"Hospital C",
    "location":"Pune",
    "noOfBeds":350,
    "availability":'Yes'
    }]
var beds_arr=[]
var availability_arr=[]
var location_arr=[]

for(var j in hospitals){
    if(hospitals[j].noOfBeds>200){
        beds_arr.push(hospitals[j])
    }
    if(hospitals[j].availability==='Yes'){
        availability_arr.push(hospitals[j])
    }
    if(hospitals[j].location==="Pune"){
        location_arr.push(hospitals[j])
    }
}


console.log("\n\nData where Number_of_Beds > 200\n")
console.log(beds_arr)
console.log("\n\nData where Availability_of_Beds = Yes\n")
console.log(availability_arr)
console.log("\n\nData where Location = Pune\n")
console.log(location_arr)
