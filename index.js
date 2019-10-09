/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    let base = 0;

    if(array.some(digit => !Number.isInteger(digit) || digit > 9 || digit < 0)){
        return null;
    }

    array.forEach((digit, i) =>{
        base += 10 **  (array.length - i - 1) * digit;
    });

    let resultNumber = base + number;
    const result = [];

    if (resultNumber === 0) {
        return [0];
    }

    while (resultNumber > 0) {
        let digit = resultNumber % 10;
        resultNumber -= digit;
        resultNumber /= 10;
        result.unshift(digit);
    }

    return result;
}

module.exports = {
    addNumber
};
