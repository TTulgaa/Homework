let x1 = prompt("x1 oruulna uu"),
  x2 = prompt("x2"),
  x3 = prompt("x3");
let y1 = prompt(),
  y2 = prompt(),
  y3 = prompt();
x1 = Number(x1);
x2 = Number(x2);
x3 = Number(x3);
y1 = Number(y1);
y2 = Number(y2);
y3 = Number(y3);
x = (x1 + x2 + x3) / 3;
y = (y1 + y2 + y3) / 3;
console.log(x, y);
// if (x >= 100 || y >= 100) {
//   if (x < y) {
//     console.log("Б баг түрүүлсэн");
//   } else if (x == y) {
//     console.log("Тэнцсэн");
//   } else {
//     console.log("А баг түрүүлсэн");
//   }
// } else {
//   console.log("ялагч байхгүй");
// }

x >= 100 || y >= 100
  ? x < y
    ? console.log("Б баг түрүүлсэн")
    : x == y
    ? console.log("Тэнцсэн")
    : console.log("А баг түрүүлсэн")
  : console.log("ялагч байхгүй");
