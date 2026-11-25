function getString(name:string):string{
    return "Amit";
}

//console.log(getString("Dulal"));
//getString(123);

function getFirstResult<T>(result:T[]):T{
    return result[0]!;// ! non null assertion operator
}

let firstNumber=getFirstResult<number>([200,300,400]);
let firstString=getFirstResult<string>(["Login","SingnUp","Cart"]);
let firstBoolean=getFirstResult<boolean>([true,false,false,true]);

console.log(firstNumber);
console.log(firstString);
console.log(firstBoolean);
