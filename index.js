/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/

function addNumber(array, number) {
 Number(array.reduse((sum,current)=>sum+current.toString())+number)
}
module.exports = { addNumber };




