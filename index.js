/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let origStr = '';
    const resultArr = [];
    let resultNumber;
    let fail = false;

    if (array.length == 0){
        resultArr.push(number);
        return resultArr;
    }
    
    array.forEach(function(item, i, arr) {
       if (typeof(item) === "number")
       origStr += item;
       else
       fail = true;
    });

    if (fail === true){
        return null;
    }
    else{
        resultNumber = parseInt(origStr);
        resultNumber += number;
        resultStr = String(resultNumber);

        for (let i = 0; i < resultStr.length; i++) {
        resultArr.push(parseInt(resultStr[i]))
    }
    }
    return resultArr;   
}

module.exports = {
    addNumber
};