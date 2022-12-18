let n = prompt("Жилээ оруулан уу?");
if (n % 4 === 0) {
  if (n % 100 === 0) {
    console.log("өндөр жил биш");
  }
  if (n % 400 === 0) {
    if (n % 100 === 0) {
      console.log("өндөр жил биш");
    }
  }
} else {
  if (n % 4 == 0) {
    console.log("өндөр жил мөн");
  } else {
    console.log("өндөр жил биш");
  }
}
if (n % 400 === 0) {
  if (n % 100 === 0) {
    console.log("өндөр жил биш");
  }
} else {
  if (n % 4 == 0) {
    console.log("өндөр жил мөн");
  } else {
    console.log("өндөр жил биш");
  }
}
