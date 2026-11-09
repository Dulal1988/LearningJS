let nums=[10,1,21,2];

console.log(nums.sort((a,b) => a-b));
console.log(nums);
console.log(nums.sort((a,b) => b-a));
console.log(nums);

let fruits=["apple","banana","cherry"];
fruits.sort((a,b) => a.localeCompare(b));
console.log(fruits);
