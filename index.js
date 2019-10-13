function addNumber(array, number) {
    // Решение задачи
    if (number < 0 || !Number.isInteger(number)) {
        return null;
    }

    if (!isCorrectArray(array)) {
        return null;

        let resultStr = parseInt(array.toString().replace(/,/gm, ''));

        let resultArr = resiltStr + number;

        return Array.from(String(resultArr), Number);
    }

    function isCorrectArray(array) {
        for (let i of array) {
            if (Number(i) !== i || i > 9 || i < 0) {
                return false;
            }
        }
        return true;
    }
}

module.exports = {
    addNumber,
};