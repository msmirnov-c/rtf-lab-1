function addNumber(array, number) {
    const isFromZeroToNine = array.every((item) => item >= 0) && array.every((item) => item < 10);
    if (!(array.every((item) => Number.isInteger(item))) || !(isFromZeroToNine)) {
        return null;
    }

    const translatedArr = array.reduce((result, item) => result + item.toString());
    const summedNum = (parseInt(translatedArr, 10) + number).toString();
    const finalArr = summedNum.split('').map((item) => parseInt(item, 10));
    
    return finalArr;
}

module.exports = {
    addNumber,
};
