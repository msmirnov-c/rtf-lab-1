function addNumber(array, number) {   
    const array1 = [];
    let transnum = '';

    for(let i = 0; i < array.length; i++) {
        if(typeof(array[i]) == 'number' && array[i] >= 0 && array[i] <= 9 && array[i] == Math.trunc(array[i])) {
            transnum = transnum + array[i];
        }
        else {
            return null;
        }
    }
    transnum = (parseInt(transnum) + number).toString(10);
    for(let i = 0; i < transnum.length; i++) {
        array1[i] = parseInt(transnum[i]);
    }
    return array1;
}