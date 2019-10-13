/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
 */
function addNumber(array, number){
    if (number < 0 || !Number.isInteger(number)){
        return null;
    }

    for(let item of array){
        if (Number(item) !== item || item > 9 || item < 0)
            return null;
    }

    const arr = parseInt(
        array
            .toString()
            .replace(/,/gm, '')
    );
    const result = arr + number;
    return Array.from(String(result), Number);
}

module.exports = {
    addNumber,
};
