// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

console.log(url.includes("staging"));//true
console.log(url.includes("production"));//false


//Start wing and ends with
console.log(url.startsWith("https"));//true
console.log(url.startsWith("http://"));//false
console.log(url.endsWith("true"));//true

//indexof or lastindex

console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("notthere"));


