/* eslint linebreak-style: ["error", "windows"] */
/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) !== typeof (+array[i])) {
            return null;
        }
    }const finalArray = [];
    let value = array.join();
    value = Number(value.replace(/,/g, ''));
    value += number;
    for (let i = 0; i < value.toString().length; i++) {
        finalArray.push(+value.toString().charAt(i));
    }return finalArray;
}

module.exports = {
    addNumber,
};
