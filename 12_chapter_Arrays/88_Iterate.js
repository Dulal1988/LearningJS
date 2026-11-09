let tests=["loing","checkout","search"];
for(let i=0;i<tests.length;i++){
    console.log(i,tests[i]);
}
console.log("--------------------------");

//for ------of (cleanest for values);
for(let test of tests){
    console.log(test);
}

console.log("_______________");

console.log("---------forEach Below-------------------");
//forEach (No return value)

tests.forEach((test,index) => {
    console.log(`${index}: ${test}`);
});

console.log("------------------");
//entries() --- index+value

for(let [i,test] of tests.entries()){
    console.log(i,test);
}

let students = ["methis", "senthil", "ajay", "rahul"];

for(let student in students){
    console.log(student, " -> ",students[student]);
}