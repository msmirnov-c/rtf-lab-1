/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    for (let i = 0; i < array.Length; i++) {
        if (isNaN(array[i]) || array[i] < 0 || array[i] > 9) {
            return null;
        }
    }

    array.reversed();
    let result = 0;
    for (let i = 0; i < array.Length; i++) {
        result += 10 ** i * array[i];
    }

    return (result + number).split('');
}

module.exports = {
    addNumber
};
