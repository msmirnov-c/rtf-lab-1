/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    if (!array.every((item) => typeof item === 'number')) {
        return null; 
    }

    const endNumber = Number(array.join('')) + number;
    const arrayOfString = Array.from(endNumber.toString());

    const arrayOfNumbers = arrayOfString.map(function(numbInString) {
        return Number(numbInString)
    });

    return (arrayOfNumbers);
}

module.exports = {
    addNumber,
};
