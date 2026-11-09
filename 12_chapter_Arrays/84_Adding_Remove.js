let arr=[1,2,3];
console.log(arr);

// Add to end
arr.push(4);
console.log("Added element in the end of the array "+arr);

//Remove from end
arr.pop();
console.log("Remove from the end of the array " +arr);

arr.push(5,6);
console.log("Added in the end of the array "+ arr);

//Remove from beginning
//arr.shift();
//console.log("Remove from beginning " +arr );

//[1,2,3,4,5,6]

arr.splice(2,1);
console.log(arr);


arr.splice(2,0,99);
//arr.splice(2,1,99);
//arr.splice(2,2,99);
console.log(arr);

//[ 1, 2, 99, 5, 6 ]
arr.splice(0,2,10,20);
console.log(arr);//10,20,99,5,6
