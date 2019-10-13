function addNumber(array, number) {
    if (!isCorrectArray(array) || !isCorrectNumber(number)){
        return null;
    }

    const numberFromArray = parseInt(array
        .toString()
        .replace(/[^0-9]/gm, ''), 10);
    let sum = numberFromArray + number;

    return sum
        .toString()
        .split("")
        .map(Number);
}

function isCorrectArray(array) {
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] !== 'number' || array[i] > 9 || array[i] < 0)
            return false;
    }
    return true;
}

function isCorrectNumber(number) {
    return !(number < 0 || !Number.isInteger(number));
}

module.exports = {
    addNumber,
};