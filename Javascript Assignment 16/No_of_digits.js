/*
Create a function that will return an integer number corresponding to the amount of digits in the given integer num
Examples
num_of_digits(1000) ➞ 4
num_of_digits(12) ➞ 2
num_of_digits(1305981031) ➞ 10
*/
function num_of_digits(num){
    var regex=/\d/g;
    if(regex.test(num)){
        console.log(regex.exec(num))
    }
    else{
        console.log("Invalid data")
    }
}
num_of_digits(1000)
num_of_digits(12)
num_of_digits(1305981031) 