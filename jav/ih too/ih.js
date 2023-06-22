let a = prompt("a"),
  b = prompt("b"),
  c = prompt("c");
a <= b
  ? b <= c
    ? console.log(c)
    : console.log(b)
  : a <= c
  ? console.log(c)
  : console.log(a);
