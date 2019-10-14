function checkArrayElements(array) {
    return array.some((element) => { return element > 9 || element < 0 || !Number.isInteger(element); });
}

function addNumber(array, number) {
    if (checkArrayElements(array)) {
        return null;
    }

    let str = array.reduce((sum, current) => {
        return sum + current;
    }, '');
    str = (Number(str) + number).toString();
    const newArray = str.split('').map(Number);

    return newArray;
}

module.exports = {
    addNumber,
};
