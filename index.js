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

// console.log(reverceString(myString));

// let obj = {
//   name: "Іван",
//   age: 30,
// };

// let map = new Map(Object.entries(obj));

// console.log(map.get("name"));

// let map = new Map();
// map.set("банан", 1);
// map.set("апельсин", 2);
// map.set("яблуко", 4);

// let obj = Object.fromEntries(map.entries()); // робимо простий об’єкт (*)

// // Готово!
// // obj = { банан: 1, апельсин: 2, яблуко: 4 }

// console.log(obj.апельсин); //

// let set = new Set();

// let ivan = { name: "Іван" };
// let petro = { name: "Петро" };
// let maria = { name: "Марія" };

// // підраховуємо гостей, деякі приходять кілька разів
// set.add(ivan);
// set.add(petro);
// set.add(maria);
// set.add(ivan);
// set.add(maria);

// set зберігає тільки 3 унікальних значення
// console.log(set.size); // 3

// for (let user of set) {
//   console.log(user.name); // "Іван" (тоді "Петро" і "Марія")
// }

// console.log(set);

// const findNumber1 = (numb) => {
//   let array = [];

//   // Collect all factors of 'numb'
//   for (let i = 1; i <= numb; i++) {
//     if (numb % i === 0) {
//       array.push(i);
//     }
//   }

//   //  if a number is prime
//   const isPrime = (num) => {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     for (let i = 5; i * i <= num; i += 6) {
//       if (num % i === 0 || num % (i + 2) === 0) return false;
//     }
//     return true;
//   };

//   // Find the largest prime factor from the array of factors
//   let largestPrime = -1;
//   for (let i = 0; i < array.length; i++) {
//     if (isPrime(array[i])) {
//       largestPrime = array[i];
//     }
//   }

//   return largestPrime;
// };

// console.log(findNumber1(600851475143));

// -------------------------------
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers) {
  const array = numbers.split(" ").map((item) => Number(item));

  const minNumber = Math.min(...array);
  const maxNumber = Math.max(...array);

  return `${maxNumber} ${minNumber}`;
}

// console.log(highAndLow("1 9 3 4 -5"));

// -----------------------------

// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.
// Your function only needs to return the result, what is shown between parentheses in
//   the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
  const arrayOfNumbers = [];

  for (let i = 1; i <= num; i++) {
    arrayOfNumbers.push(i);
  }

  const sum = arrayOfNumbers.reduce((acc, num) => (acc = acc + num), 0);

  return sum;
};

// console.log(summation(8));

// -------------------------------------------
// The cockroach is one of the fastest insects.Write a function
//   which takes its speed in km per hour and returns it in cm per second,
//     rounded down to the integer(= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number(actual type is language dependent) and is >= 0.
//  The result should be an Integer.

function cockroachSpeed(s) {
  return Math.floor(s * 27.77778);
}

// console.log(cockroachSpeed(1.08));

// ==============================

// But you're an ambitious person. You want to know if you're better
// than the average student in your class.
// You receive an array with your peers' test scores.
//  Now calculate the average and compare your score!
// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points.
//  Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {
  const averageMark =
    (classPoints.reduce((acc, el) => (acc = acc + el), 0) + yourPoints) /
    (classPoints.length + 1);

  return averageMark <= yourPoints;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 25));
