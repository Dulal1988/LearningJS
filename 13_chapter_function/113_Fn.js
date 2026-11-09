
//Immediately Invoked Function Expression (IIFE)
//They don't need to be called.

// function name1(){
//     console.log("Hi");
// }

// name1();

(function(){
    console.log("Anynomuns Fn");
})();

(function(){
    console.log("Staging");
})();

(() => {
    console.log("SetUp complete");
})();