let score=[75,80,60,90];
// Map and Filters


// every vs some

// every — ALL must pass
console.log([80,75,90].every (s => s>70 )); //true
console.log([80,60,90].every (s => s>70 )); //false here value is below 70
// some — AT LEAST ONE must pass
console.log([80,60,90].some (s => s<70 ))//true
console.log([80,75,90].some (s => s<70 ))//false