function checkArray(array) {
    return array.some(item => 0 > item || item > 9 || !Number.isInteger(item));
}

function addNumber(array, number) {
    let str = '';
    if (!checkArray(array)) {
        array.forEach(function(element) {
        str += element;
    });
    str = (Number(str) + number).toString();
    let newArray = str.split('').map(Number);

    return newArray
    }

    return null;
}

module.exports = {
    addNumber,
};
