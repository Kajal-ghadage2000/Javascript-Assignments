/*Write a JavaScript program to 
a) Calculate grades on basis of marks
>90 = A
>80 = B
>70 = C
>60 = D
>50 = E
else = F
b) Map the grades of each student
c) Group students according to the grades they have received and display.
Sample Input:
let students = [
{ name: "John", marks: '92' },
{ name: "Oliver", marks: '85' },
{ name: "Michael", marks: '79' },
{ name: "Dwight", marks: '95'},
{ name: "Oscar", marks: '64' },
{ name: "Kevin", marks: '48' },
];
Output:
{
'A': [ { name: "John", grade: 'A' },
{ name: "Dwight", grade: 'A' } ],
'B': [ { name: "Oliver", grade: 'B' } ],
'C': [ { name: "Michael", grade: 'C' } ],
'D': [ { name: "Oscar", grade: 'D' } ],
'E': [ ],
'F': [ { name: "Kevin", grade: 'F' } ],
}
*/

let students = [
    { name: "John", marks: '92' },
    { name: "Oliver", marks: '85' },
    { name: "Michael", marks: '79' },
    { name: "Dwight", marks: '95'}, 
    { name: "Oscar", marks: '64' },
    { name: "Kevin", marks: '48' },
    ];
let grade_arr={A:[], B:[], C:[], D:[], E:[], F:[]}

for(var i in students){
    var stu_name=students[i].name
    if(students[i].marks>90){
        grade_arr.A.splice(grade_arr.A.length, 0, {"name": stu_name, "grade": "A"})
    }
    else if(students[i].marks>80){
        grade_arr.B.splice(grade_arr.B.length, 0, {"name": stu_name, "grade": "B"})
    }
    else if(students[i].marks>70){
        grade_arr.C.splice(grade_arr.C.length, 0, {"name": stu_name, "grade": "C"})
    }
    else if(students[i].marks>60){
        grade_arr.D.splice(grade_arr.D.length, 0, {"name": stu_name, "grade": "D"})
    }
    else if(students[i].marks>50){
        grade_arr.E.splice(grade_arr.E.length, 0, {"name": stu_name, "grade": "E"})
    }
    else if(students[i].marks>40){
        grade_arr.F.splice(grade_arr.F.length, 0, {"name": stu_name, "grade": "F"})
    }
}

console.log(grade_arr)