function addNumber(array, number) {
    let NewMass = [];
    let NewNum = 0;
    if (array.some((item) => item === 'undefined' || item === null || item > 9 || item < 0 || Math.trunc(item) !== item || typeof (item) !== 'number' || Number.isInteger(item) === false)) return null;// Проверка на подходящие числа

    NewNum = parseInt(array.join(''), 10);
    NewNum += number;
    NewMass = NewNum.toString(10).split().map(Number);

    return NewMass;
}
module.exports = {
    addNumber,
};
