/*
Write a JavaScript program which accept a number as input in the function parameter and insert dashes (-) between each two even numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8.
*/

/*
OUTPUT
New number is 254-6-8
*/

function computeDash(num_str){
    var prev_even=false;
    var new_num='';
    for(let i=0;i<num_str.length;i++){
       var v=num_str[i]
       if(prev_even && v%2==0){
            new_num+='-'+v
       } 
       else{
            new_num+=v
       }
       if(v%2===0)
            prev_even=true
       else
            prev_even=false
    }

    console.log("New number is "+new_num)
}

var num=025468
computeDash((num).toString())