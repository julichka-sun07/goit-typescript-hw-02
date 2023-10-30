/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, U> {
  key: T;
  value: U;
}

export {};

const numberOne: KeyValuePair<string, number> = { key: "hello", value: 3 };
const numberTwo: KeyValuePair<number, number> = { key: 6, value: 3 };
const numberThree: KeyValuePair<string, null> = { key: "hello", value: null };

console.log(numberOne);
console.log(numberTwo);
console.log(numberThree);
