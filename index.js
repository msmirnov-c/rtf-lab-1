/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let pow = 0;
    let sum = 0;
    let funcArray = function(item) {
        return (item < 0 || item > 9 || typeof item !== "number")
    }
    if (array.some(funcArray)) {
        return null;
    }
    array = array.reverse();
    array.forEach(function(item) {
        sum += item * Math.pow(10, pow);
        pow++;
    });
    array = (number + sum).toString().split('');
    
    return array.map(Number);
}

module.exports = {
    addNumber
};