let B = prompt("Bat"),
  x = prompt("Ontsdvmd");
B = Number(B);
x = Number(x);
B <= 100 && B >= 9060
  ? console.log("Bat " + B + " Sain")
  : B < 90 && B >= 80
  ? console.log("Bat " + B + " Dund")
  : B < 80 && B >= 70
  ? console.log("Bat " + B + " Dund")
  : B < 70 && B >= 60
  ? console.log("Bat " + B + " hangalttai")
  : console.log("Bat " + B + " mash muu");
x <= 100 && x >= 90
  ? console.log("Ontsdvmd " + x + " Sain")
  : x < 90 && x >= 80
  ? console.log("Ontsdvmd " + x + " Dund")
  : x < 80 && x >= 70
  ? console.log("Ontsdvmd " + x + " Dund")
  : x < 70 && x >= 60
  ? console.log("Ontsdvmd " + x + " hangalttai")
  : console.log("Ontsdvmd " + x + " mash muu");
