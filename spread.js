const numbers = [232, 234, 564, 435, 907, 657, 767];
// console.log(numbers);
// console.log(...numbers);
// const result = Math.max(...numbers);
// console.log(result);
numbers.push(555);
const addNumbers = [ ...numbers, 888];

console.log(...addNumbers);