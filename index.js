function isSomeArrayValueNaN(item) {
    return isNotANumber(item);
}
    
function isNumberPositiveAndInteger(num) {
    if (!isNotANumber(num) && isInteger(num) && (num >= 0)) {
        return true;
    }
    return false;
}
    
function isNotANumber(item) {
    return typeof item !== 'number';
}
    
function isInteger(num) {
    return (num ^ 0) === num;
}

function addNumber(array, number) {
    if (array.some(isSomeArrayValueNaN)) {
        return null;
    }
    
    if (!isNumberPositiveAndInteger(number)) {
        return;
    }
    
    let firstTerm = '';
    array.forEach( item => {
        firstTerm += item.toString();
    });
    
    const sum = parseInt(firstTerm, 10) + number; 
    const sumStr = sum.toString();
    let outputArray = [];
    
    for (let i in sumStr) {
        outputArray.push(parseInt(sumStr[i], 10)); 
    }
    
    return outputArray;
}

module.exports = {
    addNumber,
};