function getStatus(code){
    if(code>= 200 && code<300){
        return "Success";
    }else if(code >=400 && code <500){
        return "Client Error";
    }else if(code >=500){
        return "Server Error";
    }else{
        return "Unkown"
    }

}

console.log(getStatus(200));
console.log(getStatus(400));
console.log(getStatus(500));
console.log(getStatus(700));