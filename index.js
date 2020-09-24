var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
var arrayFiltered = Array.from(new Set(array));

console.log(typeof arrayFiltered);
console.log(arrayFiltered);
console.log('length: ', arrayFiltered.length);
console.log(arrayFiltered[0]);
console.log(arrayFiltered[1]);
console.log(arrayFiltered[2]);