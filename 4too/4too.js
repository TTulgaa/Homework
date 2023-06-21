let x1 = prompt("x1"),
  x2 = prompt("x2"),
  x3 = prompt("x3"),
  x4 = prompt("x4");
let n1, n, m;
x1 <= x2 ? (n = x1) : (n = x2);
x3 <= x4 ? (n1 = x3) : (n1 = x4);
n1 <= n ? (m = n1) : (m = n);
console.log(Number(m));
