function checkArray(array) {
    function check(element) {
        return element > 9 || element < 0 || !Number.isInteger(element);
    }
    
    return array.some(check);
}

function addNumber(array, number) {
    let str = '';
    if (!checkArray(array)) {
        array.forEach((item) => { str += item; });
        str = (Number(str) + number).toString();
        const newArray = str.split('').map(Number);

        return newArray;
    }

    return null;
}

module.exports = {
    addNumber,
};
