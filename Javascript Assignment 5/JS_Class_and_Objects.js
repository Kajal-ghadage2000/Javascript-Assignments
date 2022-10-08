/*
OUTPUT:

PS D:\> node test.js
Volume of Cylinder 706.8583
Volume of Sphere 125.6637
Volume of Cone 104.7198
*/

//class Cylinder
class Cylinder{
    constructor(radius, height){
        this.radius=radius;
        this.height=height;
    }
    getVolume(){
        var num=Math.PI * this.radius * this.radius * this.height;
        return num;
    }
}
let CylinderObj=new Cylinder(5,9);
console.log("Volume of Cylinder "+ CylinderObj.getVolume().toFixed(4))

//class Sphere
class Sphere{
    constructor(radius){
        this.radius=radius
    }
    getVolume(){
        var num=(4/3) * Math.PI * (this.radius * 3);
        return num;
    }
}
let SphereObj=new Sphere(10);
console.log("Volume of Sphere "+ SphereObj.getVolume().toFixed(4))

//class Cone
class Cone{
    constructor(height,radius){
        this.height=height;
        this.radius=radius;
    }
    getVolume(){
        var num=Math.PI * (this.radius*2) * this.height / 3;
        return num
    }
}
let ConeObj=new Cone(10,5);
console.log("Volume of Cone "+ ConeObj.getVolume().toFixed(4))
