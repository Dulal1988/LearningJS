// Nested Ternary Operator
// when we have multiple conditions
// age=26
// age>18 Go to Goa age>25 Allow to drink;

let age =23;
let is_dulal_enojoy = (age>18 )? ( age>25 ? "Go to Goa & Allow to drink" : "Only Go to Goa" ): ("No Goa");
console.log(`Dulal can enjoy ${is_dulal_enojoy}`);