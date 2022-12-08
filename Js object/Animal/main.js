let data = [
  { animalName: "Sheep", sound: "mai" },
  { animalName: "Cow", sound: "moo" },
  { animalName: "Horse", sound: "ihoho" },
  { animalName: "Dog", sound: "woof" },
  { animalName: "Cat", sound: "meaw" },
];
// let n = prompt("Амьтан яаж дугардагыг бичнэ үү");
function getBysound(list, sound) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].sound === sound) {
      return list[i];
    }
  }
}
let n = "moo";
const print = getBysound(data, "woof");
console.log(print);
