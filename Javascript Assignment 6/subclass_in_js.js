/*
Perform the following operations to provide the implementation for a Rectangle class. The operations are:
1. Add an area() method to the Rectangle class.
2. Create a Square class that satisfies the following conditions:
○ It is a subclass of Rectangle.
○ It contains a constructor and no other methods.
○ It can use the Rectangle class' area method to print the area of a Square object.
*/

/*
OUTPUT
PS D:\> node test.js
Area of Square is 25
Area of rectangle is 10
*/

class Rectangle{
    constructor(length,width){
        this.length=length;
        this.width=width;
    }
    area(){
        var num=this.length * this.width;
        return num;
    }

}

class Square extends Rectangle{
    constructor(side){
        super();
        this.length=side;
        this.width=side;
    }
}

let SquareObj=new Square(5);
console.log("Area of Square is "+ SquareObj.area())
let RectangleObj=new Rectangle(5,2)
console.log("Area of rectangle is "+ RectangleObj.area())
