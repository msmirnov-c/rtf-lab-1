/**
 * Нужно реализовать функцию, которая будет принимать два аргумента. Первый аргумент - массив, состоящий из 
 * цифр от 0 до 9. Второй - любое целое положительное число. Метод должен возвращать массив из цифр от 0 до 9, 
 * который получается путем прибавления второго аргумента к числу, составленного из элементов массива. Если в 
 * массиве есть элементы, не являющиеся числами от 0 до 9, метод должен возвращать null.
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    var stringFromArray = "";
    var returnedArray = [];
      array.ForEach(function(item, index, array) {
          if (item === 0 || item === 1 || item === 2 || item === 3 || item === 4 || item === 5 || item === 6 || item === 7 || item === 8 || item === 9 )
          stringFromArray += item;
          else return null;
      });
      parseInt(stringFromArray);
      stringFromArray += number; 
      returnedArray = split((toString(stringFromArray), ""));
      return returnedArray;  
};

module.exports = {
    addNumber
};