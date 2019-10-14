/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let pow = 0;
    let sum = 0;
    const funcArray = function validation(item) {
        return (item < 0 || item > 9 || typeof item !== 'number');
    };
    if (array.some(funcArray)) {
        return null;
    }

    let answer = array.reverse();
    answer.forEach(item => {
        sum += item * 10 ** pow;
        pow++;
    });
    answer = (number + sum).toString().split('');

    return array.map(Number);
}

module.exports = {
    addNumber,
};
