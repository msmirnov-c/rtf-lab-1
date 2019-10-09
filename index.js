/**
 * @param array – массив элементов. Например, [1, 8, 3]
 * @param number – число, которое нужно прибавить к числу, полученному из массива
*/
function addNumber(array, number) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) != typeof (+array[i]))
            counter++;
    }
    if (counter == 0) {
        let mas = [];
        let value = array.join();
        value = Number(value.replace(/,/g, ''));
        value += number;
        for (let i = 0; i < value.toString().length; i++)
            mas.push(+value.toString().charAt(i));
        console.log(mas);
    }
    else
        console.log(null);
}

module.exports = {
    addNumber
};
