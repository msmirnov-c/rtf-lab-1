/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    let numberString = '';

    if (array.some(e => (Number.isInteger(e) && e >= 0 && e < 10)){ 
          numberString = array.join('');
      }
      else 
      {
          return null;
      }

    numberString = (parseInt(numberString,10) + number).toString();

    return numberString.split('').map(item => parseInt(item));
}

module.exports = {
    addNumber
};