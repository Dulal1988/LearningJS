// var is a actual traitor - cheter
// let is a sincer person
// const is a just const which will not change
//VARIABLE---IS A FUNCTION SCOPE 
var a = 10;
console.log(a);
function printHello(){
    console.log("Hello theTesting Academy");
    var a = 20;
    console.log(a);
    if(true){
        var a=30;
        console.log(a);
    }
    console.log(a);

}

printHello();