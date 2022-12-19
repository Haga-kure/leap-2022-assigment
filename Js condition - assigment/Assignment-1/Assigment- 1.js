console.log(1);
let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; //true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false
console.log(i);
console.log(iii);
console.log(ii);
console.log(iv);
console.log(v);
console.log(vi);
console.log(vii);
console.log(iix);
console.log(ix);
console.log(x);
console.log(xi);
console.log(2);
let one = 4 > 3 && 10 < 12; //true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; //true
let five = !(4 > 3); //false
let six = !(4 < 3); //true
let eight = !(4 > 3 && 10 < 12); //false
let nine = !(4 > 3 && 10 > 12); //true
let ten = !(4 === "4"); //true
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(five);
console.log(six);
console.log(eight);
console.log(nine);
console.log(ten);
console.log(3);
let a = prompt("Өөрийн насаа оруулна уу:");
let b = prompt("Бусад насаа оруулна уу:");
if (a < b) {
  console.log("та");
} else {
  console.log("чи");
}
console.log(4);
let day = prompt("Өдөрөө тоогоор оруулан уу?");
if (day == 1) {
  console.log("Monday ажлын өдөр ");
}
if (day == 2) {
  console.log("Tuesday ажлын өдөр");
}
if (day == 3) {
  console.log("Wednesday ажлын өдөр");
}
if (day == 4) {
  console.log("Thursday ажлын өдөр");
}
if (day == 5) {
  console.log("Friday ажлын өдөр");
}
if (day == 6) {
  console.log("Saturday aмралтын өдөр");
}
if (day == 7) {
  console.log("Sunday aмралтын өдөр");
} else {
  console.log("Өдөрөө тоогоор оруулан уу!");
}
console.log(5);
let hours = 40;
let ratePerHour = prompt("Ажилсан цагаа оруулан уу?");
let money = 20000;
if (ratePerHour <= 10) {
  ratePerHour *= money;
  console.log(
    "Таны цалин " + ratePerHour + " төгрөг Та бага цаг ажилсан байна"
  );
}
if (ratePerHour <= 25) {
  ratePerHour *= money;
  console.log(
    "Таны цалин " + ratePerHour + " төгрөг Та дундаж цаг ажилсан байна"
  );
}
if (ratePerHour <= 39) {
  ratePerHour *= money;
  console.log("Таны цалин " + ratePerHour + "төгрөг Та сайн ажилсан байна");
}
if (ratePerHour <= 45) {
  ratePerHour *= money;
  console.log(
    "Таны цалин " + ratePerHour + "төгрөг Та сайн ажилсан байна та амарч болно"
  );
}
