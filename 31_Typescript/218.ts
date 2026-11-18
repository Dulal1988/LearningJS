function infiniteLoop():never{
    while(true);
}

function throwError(message:string):never{
    throw new Error(message);
}