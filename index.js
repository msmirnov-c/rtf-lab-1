function digitFind(array, number) {
    let i = 1;
    for (let j = array.length - 1; j >= 0; j--) {
        if (array[j] > 9 || array[j] < 0 || !Number.isInteger(array[j])) {
            return null;
        }

        number += array[j] * i;
        i *= 10;
    }

    return number;
}

function addNumber(array, number) {
    const digit = digitFind(array, number);

    return digit === null ? null : digit.toString().split('').map(Number);
}

module.exports = {
    addNumber,
};
