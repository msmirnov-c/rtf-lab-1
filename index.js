/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (!array.every((item) => (typeof item) === 'number')) { return null; }

    let array = array.join('');
    let array = Number.parseInt(array);
    let array = array + number;
    let array = Array.from(array.toString());

    for (let i = 0; i < array.length; i++) {
        let array[i] = Number.parseInt(array[i]);
    }

    return (array);
}

module.exports = {
    addNumber,
};
