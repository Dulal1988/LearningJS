//Multiple Line
const getResult=(score)=> {
    if(score > 70) return "Pass";
    return "Fail";

}
console.log(getResult(75));//Pass
console.log(getResult(45));//Fail