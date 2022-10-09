//Iterate over all the characters of the word “iNeuron”.
var str="iNeuron"

//anonomous function
var display= function(str){
    var arr=str.split('')
    //forEach loop
    arr.forEach(element => {
        console.log(element)
    });
}

display(str)