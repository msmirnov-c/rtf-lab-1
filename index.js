/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (!array.every((item) => (typeof item) === 'number')) { return null; }

    array = array.join('');
    array = Number.parseInt(array);
    array += number;
    let finArray = Array.from(array.toString());

    for (let i = 0; i < finArray.length; i++) {
        finArray[i] = Number.parseInt(finArray[i]);
    }

    return (finArray);
}

module.exports = {
    addNumber,
};
