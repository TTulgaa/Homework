let a = prompt("a"),
  b = prompt("b"),
  c = prompt("c");
a <= b
  ? b <= c
    ? console.log("их тоо " + c)
    : console.log("их тоо " + b)
  : a <= c
  ? console.log("их тоо " + c)
  : console.log("их тоо " + a);
a <= b
  ? a <= c
    ? console.log("бага тоо " + a)
    : console.log("бага тоо " + c)
  : b <= c
  ? console.log("бага тоо " + b)
  : console.log("бага тоо " + c);
