function addNumber(array, number) {
    const finalArr = [];
    let translatedNum = '';
    
    for (let i = 0; i < array.length; i++) {
        if (!(typeof (array[i]) === 'number' && array[i] >= 0 && array[i] <= 9 && array[i] === Math.trunc(array[i]))) {
            return null;
        }
    }

    let translatedArr = array.reduce((result, item) => result + item.toString());
    translatedNum = (parseInt(translatedArr) + number).toString();

    for (let i = 0; i < translatedNum.length; i++) {
        finalArr[i] = parseInt(translatedNum[i]);
    }

    return finalArr;
}

module.exports = {
    addNumber,
};
