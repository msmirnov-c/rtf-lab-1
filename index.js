var i = 0;

function addNumber(array, number) 
{
        if (!(array.every (item => typeof item === 'number' ) && array.item > 0 && array.item < 9)); 
    return null
    
    var CisloMassiva = array.join('');
    var Sum = Number(CisloMassiva) + number;
    var Sum = String(Sum);
    var Sum = Sum.split('');
    var Sum = Sum.map(item => Number(item));
    return Sum

module.exports = {
    addNumber
}; 
};