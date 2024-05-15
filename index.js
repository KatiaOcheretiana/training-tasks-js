// console.log("Hello");

const fruits = [
  "apple",
  "orange",
  "kiwi",
  "kiwi",
  "apple",
  "lemon",
  "orange",
  "kiwi",
];

// 1. Count the same items in array

const countItemsInArray = (array) => {
  const count = {};

  array.forEach((item) => {
    if (!count[item]) {
      count[item] = 1;
    } else {
      count[item]++;
    }
  });
  return count;
};

// console.log(countItemsInArray(fruits));

// console.log(fruits);

// ------------

// 2. get unique items

const uniqueValue = (array) => {
  // array.filter((item, index, array) => array.indexOf(item) === index);

  // or
  const result = {};

  array.forEach((item) => {
    result[item] = true;
  });

  return Object.keys(result);
};

// console.log(uniqueValue(fruits));

// --------

// 3. group students by age
// result {
//     "18": [{ name: "Ann", age: 18 }],
//     "20": [{ name: "Alex", age": 20 }, { name: "Dima", age: 20 }],
//     "22": [{ name: "Olha", age: 22 }]
// }

const students = [
  {
    name: "Alex",
    age: 20,
  },
  {
    name: "Ann",
    age: 18,
  },
  { name: "Dima", age: 20 },
  { name: "Olha", age: 22 },
];

const groupByAge = (array) => {
  const result = {};

  array.forEach((item) => {
    if (result[item.age]) {
      result[item.age].push(item);
    } else {
      result[item.age] = [item];
    }
  });

  return result;
};

// console.log(groupByAge(students));

// 4.

const numbers = [3, 5, -4, 8, 11, 1, -1, 6];
const sum = 10;

const findNumber = (numbers, sum) => {
  for (let i = 0; i < numbers.length; i++) {
    const firstNumb = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      const secondNumb = numbers[j];

      if (firstNumb + secondNumb === sum) {
        return [firstNumb, secondNumb];
      }
    }
  }
  return [];
};

// console.log(findNumber(numbers, sum));

// 5.  get array of pizzas

const friends = [
  { name: "Alex", pizzas: ["chees", "pepperonni"] },
  {
    name: "Mike",
    pizzas: ["salami", "margarita", "chees", "pepperonni"],
  },
];

const getPizzasArray = (arr) => {
  // 1.
  //   const pizzas = [];
  //   arr.forEach((item) => pizzas.push(...item.pizzas));
  //   return pizzas.filter((item, index, arr) => arr.indexOf(item) === index);

  // 2.

  return arr.reduce((acc, item) => [...acc, ...item.pizzas], []);
};

// console.log(getPizzasArray(friends));

// 6. reverse string
const myString = "pizza";

const reverceString = (string) => {
  // 1.
  //   const result = [];
  //   for (let i = string.length - 1; i >= 0; i--) {
  //     result.push(string[i]);
  //   }
  //   return result.join("");
  // 2.
  return string.split("").reverse().join("");
};

console.log(reverceString(myString));
