/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (array.some((e) => typeof e !== 'number' || e < 0 || e > 9) || typeof number !== 'number' || number < 0){
        return null;
    }
    return parseInt(array.reduce((arr, e) => arr += e.toString())) + number;
}

module.exports = {
    addNumber
};
