# Добавь число

## Описание
Нужно реализовать функцию, которая будет принимать два аргумента. Первый аргумент - массив, состоящий из цифр от 0 до 9. Второй - любое целое положительное число. Метод должен возвращать массив из цифр от 0 до 9, который получается путем прибавления второго аргумента к числу, составленного из элементов массива. Если в массиве есть элементы, не являющиеся числами от 0 до 9, метод должен возвращать null.

### Пример:
```js
function addNumber(array, number) {
  // Решение задачи
  let str = '';
  for (let i = 0; i < array.length; i++){
    str=str+array[i];
  }
}

addNumber([1, 0, 9], 2); // 109 + 2 = 111; => [1, 1, 1]
addNumber([2, 5, 1], 5); // 251 + 5 = 256; => [2, 5, 6]
addNumber([1], 4020); // 1 + 4020 = 4021; => [4, 0, 2, 1]
addNumber([1, '4'], 1); // некорректный элемент => null
```

### Обратите внимание
* Если элемент массива не является числом от 0 до 9, то должен возвращаться `null`.
* `number` – любое целое положительное число.
