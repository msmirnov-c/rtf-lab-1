function addNumber(array, number) {
    let numberFromArray;
    if (array.every(array => array => 'number')  && array.every(array => array <= 9)  && array.every(array => array => 0)){
            numberFromArray = array.reduce((sum, current) => sum * 10 + current, 0);
        } else return null;

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
