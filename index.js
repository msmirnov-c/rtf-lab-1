function addNumber(array, number) {
    let str = '';
    array.some(item => { if (0 > item || item > 9 || !Number.isInteger(item)) { return null; } });

    array.forEach(function(element) {
        str += element;
    });
    str = (Number(str) + number).toString();
    let newArray = str.split('').map(Number);

    return newArray;
}

module.exports = {
    addNumber,
};
