/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    // Решение задачи
    array.forEach(function checkElement(element) { if (typeof (element) !== 'number') return null
    else if ((element.toString()).length === 1) {return element}
    else return null;
    });
    let finalNumber;
    for (let i = 0; i < array.length; i++){
        finalNumber += array[i] * 10;
    }

    finalNumber += number;
    const finalArr = [];
    for (let i = (finalNumber.toString()).length; i > 0; i--){
        finalArr[i]=finalNumber % 10;
    }

    return finalArr;
}

module.exports = {
    addNumber,
};
