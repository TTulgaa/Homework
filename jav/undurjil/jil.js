let x = prompt("Шалгах жилийг оруулна уу.");
const a = "Өндөр жил мөн",
  b = "Үгүй";
x % 400 == 0
  ? console.log(a)
  : x % 100 == 0
  ? console.log(b)
  : x % 4 == 0
  ? console.log(a)
  : console.log(b);
