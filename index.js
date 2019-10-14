function addNumber(array, number) {
    let num = 0;
    let newArray = [];
    const flag = array.every((item) => Number.isInteger(item));
    if (flag === true && array.every((item) => item > 0 && item < 9 && item !== null)) {
        num = array.join();
        num = Number(num.replace(/,/g, ''));
        num += number;
        newArray = num.toString(10).split('').map(Number);
    } else return null;
    
    return newArray;
}
module.exports = {
    addNumber,
};