interface APIResponse{
    statusCode:number;
    body?:string;
    headers?:object;
    responseTime:number;
}

// Get request body not required or it's optional
// but In POST Request body is must;

const responseDataGet:APIResponse ={
    statusCode:200,
    responseTime:200
}

const responseDataPost:APIResponse ={
    statusCode:200,
    body:"{name:'Dulal'}",
    responseTime:200,
    headers:{}
}

