function addNumber(array, number) {
    let sumElement = '';
    for (let i = 0; i < array.length; i++) {
        if ((typeof array[i]) !== 'number' || array[i] < 0 || array[i] > 10) {
            return null;
        }

        sumElement += array[i];
    }

    sumElement = String(Number(sumElement) + number);
    const strArr = sumElement.split ('', sumElement.length);
    const numbArr = [];
    for (let i = 0; i < strArr.length; i++){
        numbArr[i] = Number(strArr[i]);
    }

    return numbArr;
}
module.exports = {
    addNumber,
};
