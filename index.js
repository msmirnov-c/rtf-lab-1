/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let str = '';
    for (let i = 0; i <= array.length; i++) {
        if (typeof (array[i]) === 'number' || array.length === 0) {
            return null;
        }

        str += (String(array[i]));
    }

    str = String(number + Number(str));

    for (let i = 0; i < str.length; i++) {
        str[i] = Number(str[i]);
    }

    return str;
}

module.exports = {
    addNumber,
};
