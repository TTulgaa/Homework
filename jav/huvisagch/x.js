let x1 = prompt("x1"),
  x2 = prompt("x2"),
  x3 = prompt("x3"),
  x4 = prompt("x4"),
  n = 0;
(x1 = Number(x1)),
  (x2 = Number(x2)),
  (x3 = Number(x3)),
  (x4 = Number(x4)),
  x1 > 80 ? (n += x1) : (n = n);
x2 > 80 ? (n += x2) : (n = n);
x3 > 80 ? (n += x3) : (n = n);
x4 > 80 ? (n += x4) : (n = n);
console.log(n);
let y1 = prompt("y1"),
  y2 = prompt("y2"),
  y3 = prompt("y3"),
  y4 = prompt("y4"),
  m = 1;
(y1 = Number(y1)),
  (y2 = Number(y2)),
  (y3 = Number(y3)),
  (y4 = Number(y4)),
  y1 < 5 ? (m *= y1) : (m = m);
y2 < 5 ? (m *= y2) : (m = m);
y3 < 5 ? (m *= y3) : (m = m);
y4 < 5 ? (m *= y4) : (m = m);
console.log(m);
