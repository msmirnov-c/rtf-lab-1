/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (array.every((element) => element >= 0
        && element <= 9
        && Number.isInteger(element))) {
        const string = array.reduce((str, element) => str + element, '');
        const num = parseInt(string, 10) + number;
        const lastNum = num.toString();
        let arr = lastNum.split('');
        arr = arr.map(lastN => parseInt(lastN, 10));

        return arr;
    }

    return null;
}

module.exports = {
    addNumber,
};
