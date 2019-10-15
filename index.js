/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    const checkIsTrue = array.every((element) => element >= 0
        && element <= 9
        && Number.isInteger(element));
    if (checkIsTrue) {
        const string = array.reduce((str, element) => str + element, '');
        const num = parseInt(string, 10) + number;
        const lastNum = num.toString();
        const arr = lastNum.split('');

        return arr.map((item) => parseInt(item, 10));
    }

    return null;
}

module.exports = {
    addNumber,
};
