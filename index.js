function checkTheNumberType(item) {
    return typeof item !== 'number';
}

function isNumberPositiveAndInteger(num) {
    return num >= 0 ? Number.isInteger(num) : false;
}

function addNumber(array, number) {
    if (array.some(checkTheNumberType) || !isNumberPositiveAndInteger(number)) {
        return null;
    }

    const stringOfArrayValues = array.reduce((outputStr, curItem) => outputStr + curItem.toString(), '');
    const sum = parseInt(stringOfArrayValues, 10) + number;
    const sumStr = sum.toString();

    return sumStr.split('').map((item) => parseInt(item, 10));
}

module.exports = {
    addNumber,
};
