/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (!array.every((item) => (typeof item) === 'number')) { return null; }

    let endNumber = Number.parseInt(array.join('')) + number;
    let arrayOfString = Array.from(endNumber.toString());
    let endArray;

    for (let i = 0; i < array.length; i++) {
        endArray[i] = Number.parseInt(arrayOfString[i]);
    }

    return (endArray);
}

module.exports = {
    addNumber,
};
