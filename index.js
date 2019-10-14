function checkTheNumberType(item) {
    return typeof item !== 'number';
}

function isNumberPositiveAndInteger(num) {
    if (num >= 0) {
        return Number.isInteger(num);
    }

    return false;
}

function addNumber(array, number) {
    if (array.some(checkTheNumberType) || !isNumberPositiveAndInteger(number)) {
        return null;
    }

    let firstTerm = array.reduce((outputStr, curItem) => outputStr += curItem.toString());

    const sum = parseInt(firstTerm, 10) + number;
    const sumStr = sum.toString();

    return sumStr.split('').map((item) => parseInt(item, 10));
}

module.exports = {
    addNumber,
};
