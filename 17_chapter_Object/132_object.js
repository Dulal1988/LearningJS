let a1 = {
    name : "Dulal"
};

let a={status: "Pass"};
console.log(a.status);
console.log(a["status"]);


// Keys are very sensitive in nature.

let a22 = {status:"Pass", Status:"Fail"};
console.log(a22["status"]);
console.log(a22["Status"]);

