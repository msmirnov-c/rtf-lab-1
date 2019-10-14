function addNumber(array, number) {
    let str = '';
    if (array.some(item => (0 > item || item > 9 || !Number.isInteger(item)))) {
        return null;
    }

    array.forEach(function(item) {
           str += item;
    });
    str = (Number(str) + number).toString();
    newArray = str.split('').map(Number);

    return newArray;
}

module.exports = {
    addNumber
};
