/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/

function addNumber(array, number) {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let res = 0;
    let resArr = [];
    if (array.length == 0) return null;
    for (let i = 0; i < array.length; i++) {
        if (arr.indexOf(array[i]) == -1 ) return null;
        res += (Math.pow(10, array.length - i - 1) * array[i]);
    }
    res += number;
    while (res >= 0.1) {
        resArr.unshift(res % 10);
        res -= res % 10;
        res /= 10;
    }
    return resArr;
}

module.exports = {
    addNumber
};
