/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи

    if (array.some((item) => (typeof (item) !== 'number' || item < 0 || item > 9))) {
        return null;
    }

    const initialValue = '';
    let arrayAsString = array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, initialValue);

    arrayAsString = parseInt(arrayAsString, 10) + number;

    const finalArr = [];
    for (let i = arrayAsString.toString().length; i > 0; i--) {
        finalArr.unshift(arrayAsString % 10);
        arrayAsString = Math.trunc(arrayAsString / 10);
    }

    return finalArr;
}

module.exports = {
    addNumber,
};
