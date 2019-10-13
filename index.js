/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
  // Решение задачи
  if (array.every(elem => Number.isInteger(elem) & elem >= 0 & elem <= 9)) {
    let result = "";
    array.forEach(elem => result += elem);
    result = +result;
    result += number;
    return result.toString().split("");
  }

  else return "null";

}

// let array = [1, 8, 3];
// let num = 5;
// console.log(addNumber(array, num));


module.exports = {
  addNumber
};
