function addNumber(array, number) {
    function check(value) {
        if (value < 0 || value > 9 || typeof value !== 'number') { return false; }
		
        return true;
    }
    if (!array.every(check)) { return null; }
	
    return (parseInt(array.join(''), 10) + number).toString().split('').map(Number);
}

module.exports = {
    addNumber,
};
