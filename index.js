/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
      
      right = (item) => !Number.isInteger(number)  || typeof item == 'number';
        if (!array.every(right)) {
        console.log (null);
      };
      {
        str1 = array.reduce((array, number) => array + number,"");
        amount= +str1 + number;
        array1 = amount.toString().split('');

        console.log (array1.map((correct) => parseInt(correct)));
    }
}

module.exports = {
    addNumber
};
