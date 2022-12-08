console.log(1);
let data = [
  { Name: "Эрмүүн", birthOfYear: 1999, hobby: "Машин", single: false },
  { Name: "Тэмүүлэн", birthOfYear: 2000, hobby: "Хоол", single: false },
  { Name: "Өсөхбаяр", birthOfYear: 1995, hobby: "Архи", single: false },
  { Name: "Сүхбат", birthOfYear: 1990, hobby: "Сагс", single: false },
  { Name: "Тэмүүлэн", birthOfYear: 1989, hobby: "Ном", single: false },
  { Name: "Ганболд", birthOfYear: 2006, hobby: "Морь", single: false },
  { Name: "Амур", birthOfYear: 1999, hobby: "Машин", single: false },
  { Name: "Дөлгөөн", birthOfYear: 1996, hobby: "Хоол", single: false },
  { Name: "Намуунбайгаль", birthOfYear: 1997, hobby: "Морь", single: false },
  { Name: "Балжинням", birthOfYear: 1996, hobby: "Архи", single: false },
  { Name: "Ананд", birthOfYear: 1993, hobby: "морь", single: false },
  { Name: "Одбаяр", birthOfYear: 1991, hobby: "Машин", single: false },
  { Name: "Наранцэцэг", birthOfYear: 1993, hobby: "Хоол", single: false },
  { Name: "Аймерген", birthOfYear: 1996, hobby: "Хоол", single: false },
  { Name: "Тэнгисболд", birthOfYear: 1998, hobby: "Ном", single: false },
  { Name: "Биндэръяа", birthOfYear: 1996, hobby: "Хоол", single: false },
  { Name: "Индра", birthOfYear: 1978, hobby: "Хоол", single: false },
  { Name: "Сэд-Эрдэнэ", birthOfYear: 2010, hobby: "Хоол", single: false },
  { Name: "Жавхлант", birthOfYear: 1991, hobby: "Морь", single: false },
  { Name: "Далайхүү", birthOfYear: 1990, hobby: "Сагс", single: true },
];
console.log(2);
let currentYear = new Date().getFullYear();
function getByAge(list) {
  const studentsOverTwenty = [];
  for (let i = 0; i < list.length; i++) {
    const age = currentYear - list[i].birthOfYear;
    if (20 <= age) {
      studentsOverTwenty.push(list[i]);
    }
  }
  return studentsOverTwenty;
}
const print = getByAge(data);
console.log(print);
