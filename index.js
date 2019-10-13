function addNumber(array, number) {
    if (array.some(item => typeof(item) !== 'number' || item !== Math.trunc(item) || item < 0 || item > 9)) {
        return null;
    } else {
        let StringOfNumbers = number;
        StringOfNumbers += parseInt(array.reduce((total, current) => total + current.toString()));
        return StringOfNumbers.toString(10).split('').map(item => parseInt(item));
        
    }
}

module.exports = {
    addNumber
};