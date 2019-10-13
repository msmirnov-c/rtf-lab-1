/**
*@param array – массив элементов. Например, [1, 8, 3]
*@param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let numLine = '';
    array.forEach((_item, i) => {
        numLine += array[i];

        return numLine;
    });

    if (!(array.every((item) => item === Math.ceil(item) && item >= 0 && item <= 9 && (typeof (item) === 'number') && (typeof (number) === 'number')))) {
        return null;
    };

    return (number + parseInt(numLine, 10)).toString(10).split('').map((item) => parseInt(item, 10));
}
module.exports = {
    addNumber,
};
