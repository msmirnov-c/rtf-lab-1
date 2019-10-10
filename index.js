/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (!array.every((e) => typeof e === 'number')){
        return null
    }
    return parseInt(array.reduce((arr, e) => arr += e.toString())) + number
}

module.exports = {
    addNumber
};
