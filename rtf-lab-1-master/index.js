/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number)
{
  var degree = array.length;
  var num = 0;
  var flag1 = array.every(item => item.length === 1);// Решил использовать флаги для того чтобы лучше разобраться с работой every
  var flag2 = array.every(item => item.number); //Проверка на тип данных


  if ((flag1 == true) && (flag2 == true))
  {
      for(let i = 0; i < array.length; i++) // из массива в число
      {
        num+=(array[i]*Math.pow(10,degree));
        degree--;
      }

      array = []; // отчистка старого массива

      num = number + num; // сложили новое число
      String num2 = String.valueOf(num);
      array[] = new int[num2.length()]; //новый массив array
      for (int i = 0; i < num2.length(); i++) array[i] = num2.charAt(i);

  }
  else return null;// не подходит по усовию
}

module.exports = {
    addNumber
};
