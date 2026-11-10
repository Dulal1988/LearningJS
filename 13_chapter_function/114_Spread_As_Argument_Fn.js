function hasError(...codes){
    return codes.some( c=> c=> 400);
}

let responseCodes=[200,300,400,500];
let responseCodes2=[200,300,201,500];

let msg=hasError(responseCodes2);
console.log(msg);
