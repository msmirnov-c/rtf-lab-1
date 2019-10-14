function addNumber(array, number) {
    let newNum = 0;
    if (array.some((item) => item > 9 || item < 0 || Math.trunc(item) !== item
    || !Number.isInteger(item))) return null;

    newNum = parseInt(array.join(''), 10);

    return newMass = (newNum + number).toString(10).split('').map(Number);
}
module.exports = {
    addNumber,
};
