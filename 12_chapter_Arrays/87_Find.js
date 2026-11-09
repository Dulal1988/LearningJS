let nums=[10,15,30,45,80,90];
let result=nums.find(temp => temp>20);
console.log(result);

// find index
let index=nums.findIndex(n => n>20);
console.log(index);

let lastValue=nums.findLast(team => team>20);
console.log(lastValue);

let lstIndex=nums.findLastIndex(n => n>20);
console.log(lstIndex);

