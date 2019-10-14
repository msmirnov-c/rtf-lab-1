/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number) {
    // Решение задачи
    if (number < 0 || !Number.isInteger(number) || array.every((elem) => typeof elem !== 'number' && elem >= 9 && elem <= 0)) {
        return null;
    }

    const arr = parseInt(array.join(''), 10);
    const result = arr + number;

    return Array.from(String(result), Number);
}

module.exports = {
    addNumber,
};
