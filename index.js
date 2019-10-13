function addNumber(array, number) {
    // Решение задачи
    if (number < 0 || !Number.isInteger(number)) {
        return null;
    }

    function isCorrectArray(array) {
        for (let item of array) {
            if (Number(item) !== item || item > 9 || item < 0) {
                return false;
            }
        }
        return true;
    }

    if (!isCorrectArray(array)) {
        return null;
    }

        let arr = parseInt(array.toString().replace(/,/gm, 10));

        let result = arr + number;

        return Array.from(String(result), Number);
        
}
module.exports = {
    addNumber,
};
