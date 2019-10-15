/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/

function addNumber(array, number) {
    if (array === null || number < 0 || number === null) {
        return null;
    }else {
        for (let i = 0; i < array.lentgh; i++) {
            if (array[i] > 9 || array[i] < 0 || typeof array[i] !== 'number') {
                return null;
            }
            array[i] = toString(array[i]);
        }

        const str = parseInt(array.join(''), 10) + number;
        const strRes = str.toString();
        array.some(element);

        return strRes.split('').map(element).parseInt(element, 10);
    }
}
module.exports = { addNumber };
