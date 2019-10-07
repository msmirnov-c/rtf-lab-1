const {addNumber} = require('./index');

const cases = [
    { array: [1, 2, 4], number: 1, expected: [1, 2, 5] },
    { array: [null], number: 125, expected: null },
    { array: [1, 0, 9], number: 2, expected: [1, 1, 1] },
    { array: [2, 5, 1], number: 5, expected: [2, 5, 6] },
    { array: [1], number: 4020, expected:[4, 0, 2, 1]},
    { array: [1, '4'],  number: 1, expected: null },
    { array: [1, 25],  number: 1, expected: null },
    { array: [-1, 2],  number: 71, expected: null },
    { array: [1, 2.5],  number: 1, expected: null },
    { array: [2, 5, 1], number: 54, expected: [3, 0, 5] },
    { array: [], number: 0, expected: [0] }
];

describe('add number', function () {
    for (const c of cases) {
        it(`${JSON.stringify(c.array)} + ${c.number} = ${JSON.stringify(c.expected)}`, () => {
            const res = addNumber(c.array, c.number);

            expect(res).toStrictEqual(c.expected);
        });
    }
});
