/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    const right = (item) => (!Number.isInteger(number)))||(typeof (item) = 'number');
if (!array.every(right)) {
    return null;
    };
{
    let str1 = array.reduce((array, number) => array + number, ""), amount = +str1 + number;
    let array1 = amount.toString().split('');
    return (array1.map((correct) => parseInt(correct)));
}

module.exports = {
    addNumber
};
