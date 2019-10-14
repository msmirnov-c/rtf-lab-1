function addNumber(array, number) {
    let f = false;
    let str = '';
    for (let i = 0; i < array.length; i++) {
        str = + String(array[i]);
        if ((typeof array[i]) !== 'number') {
            f = true;
        }
    }

    const num = String(Number(str) + number);
    const retArr = num.split('', array.length+number);
    for (let i = 0; i < retArr.length; i++) {
        retArr[i] = Number(retArr[i]);
    }

    if ((number < 0) || (f)) {
        return null;
    }
    else {
        return retArr;
    }
}
module.exports = {
    addNumber
};