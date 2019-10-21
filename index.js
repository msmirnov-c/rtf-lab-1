function checkArray(value) {
    return value > 9 || value < 0 || !Number.isInteger(value) ? false : true;
}

function quantityFind(array, number) {
    let i = 1;
    let quantity = number;
    for (let j = array.length - 1; j >= 0; j--) {
        quantity += array[j] * i;
        i *= 10;
    }

    return quantity;
}

function addNumber(array, number) {
    if (!array.every(checkArray)) {
        return null;
    }

    const quantity = quantityFind(array, number);

    return quantity === null ? null : quantity.toString().split('').map(Number);
}

module.exports = {
    addNumber,
};
