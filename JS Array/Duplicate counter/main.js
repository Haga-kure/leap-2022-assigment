const data = 12341;
debugger;
let count = 0;
for (let i = 0; i < data.chartAt().length; i++) {
  if (1 == data[i]) {
    count = count + 1;
  }
}

console.log(count);
