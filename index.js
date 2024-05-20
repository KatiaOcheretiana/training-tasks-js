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

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 25));

// ====================================================================

// 20.05.2024

// 1.
// Who remembers back to their time in the schoolyard,
//   when girls would take a flower and tear its petals, saying each
// of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you"
// for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams,
//   surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say
// at the last petal for a flower of a given number of petals.
// The number of petals is always greater than 0.

function howMuchILoveYou(nbPetals) {
  const steps = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  const index = (nbPetals - 1) % steps.length;

  return steps[index];
}

// console.log(howMuchILoveYou(284));
// console.log(howMuchILoveYou(6));

// 2.

// In this simple exercise, you will create a program that will take two lists
// of integers, a and b.Each list will consist of 3 positive integers above 0,
//   representing the dimensions of cuboids a and b.You must find the difference
//    of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are([2, 2, 3], [5, 4, 1]), the volume of
// a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function findDifference(a, b) {
  return Math.abs(
    a.reduce((acc, num) => (acc = acc * num), 1) -
      b.reduce((acc, num) => (acc = acc * num), 1)
  );
}

// console.log(findDifference([4, 5, 30], [3, 23, 14]));

// 3.
// All of the animals are having a feast! Each animal is bringing one dish.There is just one rule:
// the dish must start and end with the same letters as the animal's name. For example, the great blue heron
// is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false
// to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters.
// beast and dish may contain hyphens and spaces, but these will not appear at the beginning
// or end of the string.They will not contain numerals.

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

// console.log(feast("great blue heron", "garlic naan"));
// console.log(feast("brown bear", "bear claw"));

// 4.
// Create a function finalGrade, which calculates the final grade of a student depending
//  on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam(from 0 to 100);
//   projects - number of completed projects(from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

// console.log(finalGrade(0, 12));
// console.log(finalGrade(85, 5));

// 5.
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors.The numbers b
// etween parentheses are shown only for you to see which numbers are counted in each case.

// function getDivisorsCnt(n) {
//   const divisors = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i == 0) {
//       divisors.push(i);
//     }
//   }
//   return divisors.length;
// }

// function getDivisorsCnt(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       count++;
//     }
//   }
//   return count;
// }

function getDivisorsCnt(n) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i === n / i) {
        count += 1;
      } else {
        count += 2;
      }
    }
  }

  return count;
}

// console.log(getDivisorsCnt(1));
// console.log(getDivisorsCnt(54));
// console.log(getDivisorsCnt(54));

// 6.

// A square of squares
// You like building blocks.You especially like building blocks that are squares.
//  And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle!
// Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait!
// That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer;
//  in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

var isSquare = function (n) {
  if (n < 0) {
    return false;
  }
  const sqrt = Math.sqrt(n);
  return sqrt === Math.floor(sqrt);
};

// const isSquare = n => Number.isInteger(Math.sqrt(n));

// console.log(isSquare(25));
// console.log(isSquare(0));
// console.log(isSquare(3));

// 7.

// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

// Square all numbers k (0 <= k <= n) between 0 and n.

// Count the numbers of digits d used in the writing of all the k**2.

// Implement the function taking n and d as parameters and returning this count.

// Examples:
// n = 10, d = 1
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

function nbDig(n, d) {
  const digit = d.toString();
  let count = 0;

  for (let i = 0; i <= n; i++) {
    const square = i * i;

    const squareStr = square.toString();

    for (let char of squareStr) {
      if (char === digit) {
        count++;
      }
    }
  }

  return count;
}

// function nbDig(n, d) {
//   let totalOfDigit = 0;

//   for (let i = 0; i <= n; i++) {
//     totalOfDigit += (i * i)
//       .toString()
//       .split("")
//       .filter((n) => n == d).length;
//   }

//   return totalOfDigit;
// }

// console.log(nbDig(10, 1));
