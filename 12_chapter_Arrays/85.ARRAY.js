let browsers=["chrome","firefox","opera","safari","edge"];
console.log("Total elements: ",browsers.length);
browsers.pop();
console.log("After using pop() method ",browsers);
console.log("Total elements", browsers.length);

let removed=browsers.shift();
console.log("Removed elements is: "+removed);
console.log("After shifing",browsers);

for(let i=0;i<browsers.length;i++){
    console.log(browsers[i]);
    if(browsers[i] === "opera"){
        console.log("Opera doesn't support Automation Now!");
    }
}