/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (Array.isArray(array) && Number.isInteger(number) && number > 0 && array.every(item => item >= 0 && item < 10 && Number.isInteger(item))){
      let myString = array.join(""); //преобразуем массив в строку
      let mySum = Number(myString) + number; //переводим строку в число и складываем
      let intToStr = String(mySum); //преобразуем число в строку
      let myResult = intToStr.split("").map(Number); //переводим строку в массив строк и преобразуем в массив чисел
      return myResult;
    } else {
      return null;
    }
}

module.exports = {
    addNumber
};
