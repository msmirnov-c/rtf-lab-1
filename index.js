function checkArray(array) {
    return array.some(item => {item > 9 || item < 0 || !Number.isInteger(item)});
}

function addNumber(array, number) {
    let str = '';
    if (!checkArray(array)) {
        array.forEach((item) => {str += item});
        str = (Number(str) + number).toString();
        const newArray = str.split('').map(Number);

        return newArray;
    }

    return null;
}

module.exports = {
    addNumber,
};
