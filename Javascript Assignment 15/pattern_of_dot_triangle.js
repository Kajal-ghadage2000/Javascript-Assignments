/*
This Triangular Number Sequence is generated from a pattern of
dots that form a triangle. The first 5 numbers of the sequence, or
dots, are:
1, 3, 6, 10, 15

This means that the first triangle has just one dot, the second one
has three dots, the third one has 6 dots and so on.
Write a function that returns the cumulative sum of the number of
all the previous (including current) dots when given its
corresponding triangle number of the sequence.

https://www.google.com/search?q=triangular+number+sequence&sxsrf=ALiCzsZqcXgdJDMiI0HocVYOoSxpuQ1AAg:1665393409719&tbm=isch&source=iu&ictx=1&vet=1&fir=Ph_bD_5YZoZ8zM%252CiZ2UbVu1vOX7oM%252C%252Fm%252F01fbc7%253BXmvTmrc07fjWPM%252C0rp2CLyu-1ziQM%252C_%253BLB3StO5tX1hOnM%252CdqOF9y_nCYPUMM%252C_%253BeDKgbO2lRAhw8M%252ClO-5Qlr86NeehM%252C_&usg=AI4_-kSNFRylC1IoMZZDPJZZAs7fgZA5MA&sa=X&ved=2ahUKEwjrv-P0qdX6AhUNyXMBHaAFCD4Q_B16BAhsEAE#imgrc=Ph_bD_5YZoZ8zM

Examples
triangle(1) ➞ 1
triangle(6) ➞ 56 (1+3+6+10+15+21)
*/

function calculateNoOfDots(tri_no){
    var sum=0;
    var arr=[]
    for(var i=0;i<tri_no;i++){
        if(i===0)
            arr.push(1)
        else    
            arr.push(arr[i-1]+(i+1))
        sum+=arr[i]
    }
    return sum;
}

console.log(calculateNoOfDots(6))