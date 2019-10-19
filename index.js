const array = [1, 6, 3];
const number = 2;

function addNumber(array, number) {
    let numberFromArray;
    if (array.every(checkNumber)) {
        numberFromArray = array.reduce((sum, current) => sum * 10 + current, 0);
    } else return null;

    function checkNumber(num){
        return (typeof num === 'number' && num <=9 && num>=0);
    }

    numberFromArray += number;
    const sumOfNumbers = [];
    const lengthOfNumberFromArray = numberFromArray.toString().length;
    for (let i = lengthOfNumberFromArray; i > 0; i--) {
        sumOfNumbers[i - 1] = numberFromArray % 10;
        numberFromArray = Math.trunc(numberFromArray / 10);
    }

    return sumOfNumbers;
}

console.log(addNumber(array, number));
module.exports = {
    addNumber,
};
