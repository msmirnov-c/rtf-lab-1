function addNumber(array, number) {
    if (!(array.every(item => Number.isInteger(item))) || !(array.every(item => item >= 0)) || !(array.every(item => item <= 10))) {
        return null;
    }

    const translatedArr = array.reduce((result, item) => result + item.toString());
    let summedNum = (parseInt(translatedArr, 10) + number).toString();
    const finalArr = summedNum.split('').map(item => parseInt(item));

    return finalArr
}

module.exports = {
    addNumber,
};
