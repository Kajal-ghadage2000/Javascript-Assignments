/*
Write a JavaScript program to take an array as input from the user and calculate the sum of numbers in odd places and the sum of numbers at even places.
a) Print the difference between the two sums
b) Print the number of elements in odd places
c) Print the number of elements in even places
d) Print the average of all elements in the array
e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even Places

Sample Input:
[ 1, 2, 3, 4, 5 ]
Explanation:
Sum of Numbers at Odd Places = 1 + 3 + 5 = 9
Sum of Numbers at Even Places = 2 + 4 = 6
Difference = 9 - 6 = 3

Sample Output:
Difference = 3
Odd Elements = 3
Even Elements = 2
Average = 3
GCD = 3
*/

var arr=[ 1, 2, 3, 4, 5 ]
var odd_sum=0
var odd_arr=[]
var even_sum=0
var even_arr=[]
arr.forEach((element, index)=>{
    myindex=index+1
    if(myindex%2===0){
        even_sum+=element
        even_arr.push(element)
    }
    else{
        odd_sum+=element
        odd_arr.push(element)
    }
})

console.log("sum of numbers in odd places: "+ odd_sum)
console.log("sum of numbers in even places: "+ even_sum)

console.log("Difference = "+ Math.abs(odd_sum-even_sum))
console.log("Odd Elements = "+ odd_arr.length )
console.log("Even Elements = "+ even_arr.length )
console.log("Average = "+ (odd_sum+even_sum)/arr.length)