/**
     * @param array – массив элементов. Например, [1, 8, 3]
     * @param number – число, которое нужно прибавить к числу, полученному из массива
     */
    function addNumber(array, number) {
        if (array.every(value => typeof value == 'number' || value < 0 || value < 9)|| number < 0){
            return null;
        }
        let string = parseInt(array.join('')) + number;
        return string.split('').map(Number);
    }
module.exports = {
    addNumber
};