const arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
2;
let n = 0;
for (let i = 0; i < arrayOfNumbers.length; i++) {
  n += arrayOfNumbers[i];
  console.log(n);
}
// 3
//   let HighNumber = arrayOfNumbers[0];
//   for (let i = 1; i < arrayOfNumbers.length; i++) {
//     if (HighNumber < arrayOfNumbers[i]) {
//       HighNumber = arrayOfNumbers[i];
//       console.log(HighNumber);
//     }
//   }
// 4
// let HighNumber = arrayOfNumbers[0];
// for (let i = 1; i < arrayOfNumbers.length; i++) {
//   if (HighNumber > arrayOfNumbers[i]) {
//     HighNumber = arrayOfNumbers[i];
//     console.log(HighNumber);
//   }
// }
// 5
//   for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
//     arrayOfNumbers[i + 1] = arrayOfNumbers[i];
//   }
//   arrayOfNumbers[0] = 32;
//   console.log(arrayOfNumbers);
// 6
//   for (let i = arrayOfNumbers.length + 1; i >= 0; i--) {
//     arrayOfNumbers[i + 1] = arrayOfNumbers[i];
//   }
//   arrayOfNumbers[-1] = 23;
//   console.log(arrayOfNumbers);
