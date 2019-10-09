/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number)
{
  var degree = array.length;
  var num = 0;
  var lengthOfElem = array.every(item => item.length === 1);// Решил использовать флаги для того чтобы лучше разобраться с работой every
  var typeOfElem = array.every(item => typeof item === 'number'); //Проверка на тип данных
  if (lengthOfElem == true && typeOfElem == true)
  {
    for(let i = 0; i < array.length; i++) // из массива в число
    {
      num+=(array[i]*Math.pow(10,degree));
      degree--;
    }
      array = []; // отчистка старого массива
      num = number + num; // сложили новое число
      for (let i of num.toString())
        array.push(parseInt(i));
  }
  else return null;// не подходит по усовию
  return array;// возвращаю массив
}

module.exports = {
    addNumber
};
