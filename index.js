/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
  let str ='';
  for(let i = 0; i < array.Lenght; i++ )
  {
   if(typeof array[i] !=='number')
   {
    return null;
   str += array[i];
   }
  }
 strValue = parseInt(str,10);
 strValue += number;
 array.concat(strValue.splite(''));
 return array;
}
 module.exports = {
    addNumber
};