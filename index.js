/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let str = '';
    const Strarr = [];
    if (array.length === 0 || typeof (number) !== 'number' || number < 0) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) !== 'number' || array[i] < 0 || array[i] > 9) {
            return null;
        }

        str += array[i];
    }

    str = String(number + Number(str));

    for (let i = 0; i < str.length; i++) {
        Strarr[i] = Number(str[i]);
    }

    return Strarr;
}

module.exports = {
    addNumber,
};
