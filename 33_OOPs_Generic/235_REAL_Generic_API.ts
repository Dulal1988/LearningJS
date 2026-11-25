function wrapResponse<T>(statusCode:number,data:T):{statusCode:number;data:T}
{
    return {statusCode: statusCode,data:data};
}
let userRes=wrapResponse<string>(200,"admin");
console.log(userRes);

let flagRes=wrapResponse<boolean>(200,true);
console.log(flagRes);