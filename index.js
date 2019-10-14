/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (!array.every((item) => (typeof item) === 'number')) { return null; }

    const endNumber = Number(array.join('')) + number;
    const arrayOfString = Array.from(endNumber.toString());

    for (let i = 0; i < arrayOfString.length; i++) {
        arrayOfString[i] = Number(arrayOfString[i]);
    }

    return (arrayOfString);
}

module.exports = {
    addNumber,
};
