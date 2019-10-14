/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    function isTrue(number) {
        return number >= 0 && number <= 9 && typeof number === 'number';
    }
    
    if (array.every(isTrue)) {
        let newNumber = Number(array.join(''));
        newNumber += number;
        
        return newNumber.toString.split('').map(Number);
    }

    return null;
}

module.exports = {
    addNumber,
};
