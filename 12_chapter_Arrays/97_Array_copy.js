let original=[1,2,3,4];
let copy1=[...original];

copy1.push(91);
console.log(copy1);
console.log(original);
let copy2=original.slice();
copy2.push(98);
console.log(copy2);

// let deep_copy_array = original;
// deep_copy_array.push(91);
// console.log(original);

// console.log(deep_copy_array);
