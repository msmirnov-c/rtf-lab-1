function addNumber(array, number) {
    let numberFromArray = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && array[i] <= 9 && array[i] >= 0) {
        } else return null;
    }

    numberFromArray += number;
    const sumOfNumbers = [];
    const lengthOfNumberFromArray = numberFromArray.toString().length;
    for (let i = lengthOfNumberFromArray; i > 0; i--) {
        sumOfNumbers[i - 1] = numberFromArray % 10;
        numberFromArray = Math.trunc(numberFromArray / 10);
    }

    return sumOfNumbers;
}

module.exports = {
    addNumber,
};
