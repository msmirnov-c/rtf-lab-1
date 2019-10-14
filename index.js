/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let pow = array.length - 1;
    let sum = 0;
    const funcArray = function validation(item) {
        return (item < 0 || item > 9 || typeof item !== 'number');
    };
    if (array.some(funcArray)) {
        return null;
    }

    array.forEach((item) => {
        sum += item * 10 ** pow;
        pow--;
    });
    const answer = (number + sum).toString().split('');

    return answer.map(Number);
}

module.exports = {
    addNumber,
};
