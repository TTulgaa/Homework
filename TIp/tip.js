let x = prompt();
x = Number(x);
// if (x >= 5000 && x <= 30000) {
//   x = x + x * 0.15;
// } else {
//   x = x + x * 0.2;
// }
// console.log(x);
x >= 5000 && x <= 30000 ? (x = x + x * 0.15) : (x = x + x * 0.2);
console.log(x);
