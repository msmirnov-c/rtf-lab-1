/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
  if( array.every(x=>x=>'number'))
  {
 Number(array.reduce((sum, current) => sum + current.toString())) + number;
  return null;}
 }
 module.exports = {
    addNumber
};