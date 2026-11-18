// Arrow function annotation

const multiple=(a:number,b:number):number => a * b;

//Object Annotation
let user:{name:string,age:number}={
    name:"John",
    age:30
}

//Function Annotation

function sayHello(name:string):void{
    console.log("msg");
}

function greet(name:string):string{
    return `Hello ${name}!`;
}