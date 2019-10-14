/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (Array.isArray(array) && Number.isInteger(number) && number > 0 && array.every(item => item >= 0 && item < 10 && Number.isInteger(item))){
      let myString = array.join("");
      let mySum = Number(myString) + number;
      let intToStr = String(mySum);
      let myResult = intToStr.split("").map(Number);
      return myResult;
    } else {
      return null;
    }
}

module.exports = {
    addNumber
};
