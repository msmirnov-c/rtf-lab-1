/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (!array.every(item => typeof item === "number"))
        return null;
    let value = array.join();
    value = Number(value.replace(/,/g, '')) + number;
    let list = value.toString().split('').map(item => Number(item));
    return list;
}

module.exports = {
    addNumber
};
