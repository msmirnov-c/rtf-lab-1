function addNumber(array, number) {
    function check(value) {

        return ((value > 0 || value < 9) && typeof value == 'number')
    }
    if (!array.every(check)) { 
        return null; 
    }

    return (parseInt(array.join(''), 10) + number)
        .toString()
        .split('')
        .map(Number);
}

module.exports = {
    addNumber,
};
