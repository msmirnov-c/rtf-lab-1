/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    let finalString = '';

    for (let i = 0; i < array.length; i++) {
        if (!Number.isInteger(array[i]) || array[i].toString().length !== 1) {
            return null;
        }

        finalString += array[i].toString();
        i++;
    }

    return (parseInt(finalString, 10) + number).toString().split('').map((element) => parseInt(element, 10));
}

module.exports = {
    addNumber,
};
