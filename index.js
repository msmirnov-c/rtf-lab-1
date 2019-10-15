function addNumber(array, number) {
    const isFromZeroToNine = array.every((item) => item >= 0 && item < 10);
    if (!(array.every((item) => Number.isInteger(item))) || !(isFromZeroToNine)) {
        return null;
    }

    const numberFromArray  = array.reduce((result, item) => result + item.toString(), 0);
    const summedNum = (parseInt(numberFromArray , 10) + number).toString();

    return finalArr = summedNum.split('').map((item) => parseInt(item, 10));
}

module.exports = {
    addNumber,
};
