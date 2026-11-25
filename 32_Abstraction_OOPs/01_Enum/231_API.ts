enum HTTPMthod{
    geto="Get",
    posto="POST",
    puto = "PUTO",
    deleto = "DELETE"
}

function sendRequest(method:HTTPMthod,endpoint:string): void{
    console.log(method + " "+ endpoint + "  -->200 OK");
}

sendRequest(HTTPMthod.geto,"/api/users")
sendRequest(HTTPMthod.posto,"/api/users")
sendRequest(HTTPMthod.puto,"/api/users1")