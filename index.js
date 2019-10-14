/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
  var s = "";
  var sum = 0;
  var numbers = [];
   for(let i = 0; i < array.length; i++)
   {
     if (typeof(array[i]) === 'number')
     {
       s = s + String(array[i]);
     }
     else return null
   }
   sum = Number(s) + number;
   s = String(sum);
   for (let i = 0; i < s.length; i++)
   {
     numbers.push(Number(s[i]))
   }
   return numbers
}

module.exports = {
    addNumber
};
