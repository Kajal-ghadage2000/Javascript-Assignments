let txt = "ABCDEFGHIJ KLMNOPQRST UVWXYZ";
let length = txt.length;

console.log('\n\n------------------------------')
console.log('Input String: ' +txt)
console.log('------------------------------')

/*Input a String S, and check its length and if the length is greater than 4,truncate the input String and output the result
Input: Ice Output: Ice
Input:Icecream Output:IceC
*/
if(length>4){
    console.log("Output truncate string using slice() is: "+ txt.slice(0,4)) // slice(start, end) (end not included)
    console.log("Output truncate string using slice() is: "+ txt.substring(0,4)) // substring(start, end)
    console.log("Output truncate string using slice() is: "+ txt.substr(0,4)) // substr(start, length)
}
else{
    console.log("String not truncated as it's length is less than 4, output: "+txt)
}

/*
Input a String S with multiple words, and remove whitespaces and output the result -
Input: “Hii Boy” Output: “HiiBoy”
*/
console.log("\nString result after removing all spaces from string using replace: "+txt.replace(' ',''))
console.log("String result after removing all spaces from string using RegExp: "+txt.replace(new RegExp(' ','g'),''))

/*
Input a String S with two words, and replace first word with second word and display the result -
Input: “Hii Boy” Output: “Boy Hii”
*/
let txt1="Hii Girl"

console.log('\n\n------------------------------')
console.log('Input String: ' +txt1)
console.log('------------------------------')

let txt1_result=txt1.split(' ')[1]+' '+txt1.split(' ')[0]
console.log("String result after swapping two words: "+txt1_result)

/*
Input a String S with a word, and replace character “a” with “x” and display the result -
Input: “apple” Output: “xpple”
*/
let txt2="apple is a fruit and apple fruit is suggested by doctor to eat everyday"

console.log('\n\n------------------------------')
console.log('Input String: ' +txt2)
console.log('------------------------------')
console.log("String result after replacing all charcter a with x: "+ txt2.replace(new RegExp('a','g'), 'x'))

//What string method can be used to convert string into array ?
console.log("\nCoverted String into array: "+ txt2.split(''))

//What string method can be used to check the occurrence of a specified text in a string?
console.log("\nCheck for occurance for string using search() return position: "+ txt2.search('fruit'))
console.log("Check for occurance for string using match() return array: "+ txt2.match(new RegExp('fruit','g')))
console.log("Check for occurance for string using match() length (No of times string occurs): "+ txt2.match(new RegExp('fruit','g')).length)

//How can you break a string to a newline in Javascript ?
console.log("\nResult of break each word in string to newline: "+ txt2.replace(new RegExp(" ","g"),"\n"))

//Write a Javascript function to test whether the first character of a string is lowercase.
function checkIslower(str){
    if(str[0]===str[0].toLowerCase())
        return true
    else
        return false
}
var result=checkIslower(txt2)
if(result)
    console.log("\nFirst character of a string is lowercase")
else
    console.log("\nFirst character of a string is not in lowercase")

//Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc (any combination) using string methods. How will you handle that ?
console.log("\nUser entered input can be handled either by converting it to uppercase/lowercase/camelcase: \nYES -- "+"YES".toUpperCase() + "\nyes -- " + "yes".toUpperCase())

/*
Given a String S, achieve following tasks
a) Convert the String into upper case.
b) Convert only the first character to uppercase.
c) Convert the String into lower case.
d) Break the string into two halves and swap them.
e) Count the repeating characters.
f) Reverse the string
*/

var test="javascript"

console.log('\n\n------------------------------')
console.log('Input String: ' +test)
console.log('------------------------------')

console.log("Convert the String into upper case: "+test.toUpperCase())
console.log("Convert only the first character to uppercase: "+ test[0].toUpperCase()+test.substring(1).toLowerCase())
console.log("Convert the String into lower case: "+ test.toLowerCase())
var str1=test.substring(0, test.length/2)
var str2=test.substring((test.length/2)+1, test.length)
var break_and_swap=str2+str1;
console.log("Break the string into two halves and swap them: "+ break_and_swap)

function countLetters(str){
    let tempstr = new Set(str);   
    // Convert the set into array using spread
    tempstr = [...tempstr];

    let final_dict={};
    let i=0;
    while(i<tempstr.length){
        final_dict[tempstr[i]]=str.match(new RegExp(tempstr[i],'g')).length;
        i++;
    }
    return final_dict;
}
var result=countLetters('KAJAL')
console.log("Count the repeating characters: ")
for(var key in result){
    console.log(key+" : "+result[key])
}
console.log("\nReverse the string: " +test.split('').reverse().join(''));

