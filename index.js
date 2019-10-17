/**
*@param array – массив элементов. Например, [1, 8, 3]
*@param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let numLine = '';
    var totalAmount = 0;
    var condition = array.every((item) => item === Math.ceil(item) && item >= 0 && item <= 9 && (typeof (item) === 'number'));
    numLine = array.reduce((accumulator, item) => accumulator + item, numLine);

    if (!condition) {
        return null;
    }

    totalAmount = number + parseInt(numLine, 10);

    return totalAmount.toString(10).split('').map((item) => parseInt(item, 10));
}
module.exports = {
    addNumber,
};
