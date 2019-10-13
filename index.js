/**
     * @param array – массив элементов. Например, [1, 8, 3]
     * @param number – число, которое нужно прибавить к числу, полученному из массива
     */

    function addNumber(array, number) {
        if (array.every(value => typeof value == 'number' || value >= 0 || value <= 9)){
            let string = parseInt(array.join(''),10) + number;
            return string.toString().split('').map(Number);

        }
        return null;
    }
    
module.exports = {
    addNumber
};