function addNumber(array, number) {
    let n1 = 0;

    if (number >= 0 && typeof (number) == 'number') {
        const s = new String(number);
        if (s.indexOf('.') >= 0) {
            return null;
        }
    }
    else {
        return null;
    }

    if (!array.every(function (item) {
        if (item >= 0 && item <= 9 && typeof(item)=='number') {
            n1 = n1 * 10 + item;
            return true;
        }
        else {
            return false;
        }       
    })) 
        return null;

    n1 += number;
    return String(n1).split('').map(Number);
}

module.exports = {
    addNumber
};