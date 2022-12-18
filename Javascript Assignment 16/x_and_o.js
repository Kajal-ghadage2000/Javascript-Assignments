/*
Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.
● Return a boolean value (true or false).
● Return true if the amount of x's and o's are the same.
● Return false if they aren't the same amount.
● The string can contain any character.
● When "x" and "o" are not in the string, return true.
Examples
XO("ooxx") ➞ true
XO("xooxx") ➞ false
XO("ooxXm") ➞ true
// Case insensitive.
Notes
● Remember to return true if there aren't any x's or o's.
● Must be case insensitive.
*/

function XO(str){
    var regex=/[x][o]/i
    if(regex.test(str)){
        var xlen=str.match(new RegExp('x','gi')).length
        var olen=str.match(new RegExp('o','gi')).length
        if(xlen===olen)
            return true
        else 
            return false
        
    }
    else{
        return true;
    }
}
console.log(XO("ooxx"))
console.log(XO("xooxx"))
console.log(XO("ooxXm"))