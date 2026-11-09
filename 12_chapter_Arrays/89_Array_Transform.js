let score=[45,85,60,73,89];
let grades=score.map(i => i>70 ? "Pass":"Fail" )
console.log(grades);

let passing=score.filter( s => s>=70);
console.log(passing);