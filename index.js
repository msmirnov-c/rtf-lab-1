/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    for (let i = 0; i < array.length; i++)
 { if (typeof array[i] != typeof number) 
    return(null); 
    }
 let value = array.join('');
     let sum = String(parseInt(value) + number);
     let array2 =[];
     array2 = sum.split('');
     let array3 =[]; 
     for (let j = 0; j < array2.length; j++) 
            array3[j] = parseInt(array2[j]);
     return(array3);
    options: {
  fix: true
}
}

module.exports = {
    addNumber
};
