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

// ==========================================================================
// ==========================================
// ====================

// 21.05.2024

// 1.
// You probably know the "like" system from Facebook and other pages.
//  People can "like" blog posts, pictures or other items.We want to create
//  the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people
// that like an item.It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return `${names[0]} likes this`;
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// console.log(likes([]));
// console.log(likes(["Peter"]));
// console.log(likes(["Jacob", "Alex"]));
// console.log(likes(["Max", "John", "Mark"]));
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// 2.
// Implement a pseudo - encryption algorithm which given a string S and an integer N
// concatenates all the odd - indexed characters of S with all the even - indexed
// characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
  console.log(text, n);
  if (!text || n <= 0) return text;
  while (n--) {
    let ans = "";
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join("");
  }
  return encryptedText;
}

// console.log(encrypt("This is a test!", 0));
// console.log(encrypt("This is a test!", 1));

// console.log(decrypt("This is a test!", 0));
// console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1));

// 3.
// Write a function that takes a list of strings as an argument and returns
//  a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed
// to your function, albeit with the 'geese' removed.Note that all of the strings will be in
//   the same case as those provided, and some elements may be repeated.

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((bird) => !geese.includes(bird));
}

// console.log(
//   gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])
// );

// console.log(
//   gooseFilter([
//     "Mallard",
//     "Hook Bill",
//     "African",
//     "Crested",
//     "Pilgrim",
//     "Toulouse",
//     "Blue Swedish",
//   ])
// );

// 4.
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

function findUniq(arr) {
  const elCounts = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!elCounts.has(arr[i])) {
      elCounts.set(arr[i], 1);
    } else {
      elCounts.set(arr[i], elCounts.get(arr[i]) + 1);
    }
  }
  for (let [key, value] of elCounts) {
    if (value === 1) {
      return key;
    }
  }
}

// console.log(findUniq([1, 0, 0]));
// console.log(findUniq([1, 1, 1, 2, 1, 1]));

// ===================================================================================
// =================================
// 24.05.2024

// 1)

// The main idea is to count all the occurring characters in a string.
// If you have a string like aba, then the result should be { 'a': 2, 'b': 1 }.

// What if the string is empty? Then the result should be empty object literal, {}.

// function count(string) {
//   if (string === "") {
//     return {};
//   }

//   const array = string.split("");
//   const result = {};

//   for (let i = 0; i < array.length; i++) {
//     if (result[array[i]]) {
//       result[array[i]]++;
//     } else {
//       result[array[i]] = 1;
//     }
//   }

//   return result;
// }

function count(string) {
  var count = {};
  string.split("").forEach((s) => {
    count[s] ? count[s]++ : (count[s] = 1);
  });

  return count;
}

// console.log(count(""));
// console.log(count("a"));
// console.log(count("aba"));
// console.log(count("ABC"));

// 2)
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
// Note: The function accepts an integer and returns an integer.

function squareDigits(num) {
  const result = String(num)
    .split("")
    .map((el) => Math.pow(el, 2))
    .join("");
  return Number(result);
}

// console.log(squareDigits(2112));

// 3)
// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]-- > "found the needle at position 5"

// Note: In COBOL, it should return "found the needle at position 6"

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

// console.log(
//   findNeedle([
//     "3",
//     "123124234",
//     undefined,
//     "needle",
//     "world",
//     "hay",
//     2,
//     "3",
//     true,
//     false,
//   ])
// );

// console.log(
//   findNeedle([
//     "283497238987234",
//     "a dog",
//     "a cat",
//     "some random junk",
//     "a piece of hay",
//     "needle",
//     "something somebody lost a while ago",
//   ])
// );

// 4)
// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads
//  the same backwards as forwards, such as madam or racecar.

// function isPalindrome(x) {
//   const input = x.toLowerCase();

//   for (let i = 0, j = input.length - 1; i < j; i++, j--) {
//     if (input[i] !== input[j]) {
//       return false;
//     }
//   }
//   return true;
// }

const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
    ? true
    : false;
};

// console.log(isPalindrome("aba"));

// 5)

// Given two numbers and an arithmetic operator(the name of it, as a string),
//  return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number
//   in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;

    default:
      break;
  }
}

// console.log(arithmetic(1, 2, "add"));
// console.log(arithmetic(5, 2, "divide"));

// 6)

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  const inputStr = str.toLowerCase();
  const count = {};

  for (let i = 0; i < inputStr.length; i++) {
    if (count[inputStr[i]]) {
      count[inputStr[i]]++;
    } else {
      count[inputStr[i]] = 1;
    }
  }
  return count.x === count.o;
}

// const XO = (str) => {
//   str = str.toLowerCase().split("");
//   return (
//     str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
//   );
// };

// console.log(XO("xxOo"));
// console.log(XO("xo"));
// console.log(XO("xxxm"));
// console.log(XO("Oo"));

// 7)
// Complete the function that takes two integers(a, b, where a < b)
// and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  const result = [];

  for (let i = a; i <= b; i++) {
    result.push(i);
  }

  return result;
}

// console.log(between(1, 4));
// console.log(between(-2, 2));

// ==========================================================================

// ================

// 02.06.2024

// 1)
// Consider an array / list of sheep where some sheep may be missing from their place.
//  We need a function that counts the number of sheep present in the array(true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(sheep) {
  return sheep.reduce((acc, item) => (item === true ? acc + 1 : acc), 0);
}

// console.log(
//   countSheeps([undefined, null, false, true, true, false, null, undefined])
// );

// console.log(
//   countSheeps([
//     true,
//     true,
//     true,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     true,
//     false,
//     true,
//     false,
//     false,
//     true,
//     true,
//     true,
//     true,
//     true,
//     false,
//     false,
//     true,
//     true,
//   ])
// );

// 2)

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  const array = name.split(" ");
  const first = array[0][0].toUpperCase();
  const second = array[1][0].toUpperCase();
  return `${first}.${second}`;
}

// function abbrevName(name) {
//   return name
//     .split(" ")
//     .map((i) => i[0].toUpperCase())
//     .join(".");
// }

// console.log(abbrevName("sam harris"));

// 3)

// Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  let a = 0;
  for (const i of x) {
    let b = parseInt(i);
    a += b;
  }
  return a;
}

// console.log(sumMix([9, 3, "7", "3"]));

// 4)
// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears;
  let dogYears;

  switch (humanYears) {
    case 1:
      catYears = 15;
      dogYears = 15;
      break;

    case 2:
      catYears = 15 + 9;
      dogYears = 15 + 9;
      break;
    default:
      catYears = 15 + 9 + (humanYears - 2) * 4;
      dogYears = 15 + 9 + (humanYears - 2) * 5;
      break;
  }

  return [humanYears, catYears, dogYears];
};

// console.log(humanYearsCatYearsDogYears(10));

// 5)
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
  return url.split("#")[0];
}

// console.log(removeUrlAnchor("www.codewars.com#about"));

// ---------------------------------------------------------------------------------
// =======================================================================================================

// 11.06.24

// 1)

// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because

function squareSum(numbers) {
  return numbers.reduce((acc, n) => acc + Math.pow(n, 2), 0);
}

// console.log(squareSum([1, 2]));

// 2)
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  const numberArray = n.toString().split("");
  return numberArray.map((i) => Number(i)).reverse();
}

// console.log(digitize(35231));

// 3)

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

// console.log(roundToNext5(5));

// 4)
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let array = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const segment = char.toUpperCase() + char.toLowerCase().repeat(i);

    array.push(segment);
  }

  return array.join("-");
}

// function accum(s) {
//   return s
//     .split("")
//     .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
//     .join("-");
// }

// console.log(accum("cwAt"));

// 5)

// Write a function named setAlarm / set_alarm / set - alarm / setalarm(depending on language)
//  which receives two parameters.The first parameter, employed, is true whenever you are employed
//  and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation(because these are the
//   circumstances under which you need to set an alarm).It should return false otherwise.Examples:

// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

function setAlarm(employed, vacation) {
  return employed && !vacation ? true : false;
}

// console.log(setAlarm(true, false));

// 6)

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
  let result = url;

  if (result.startsWith("http://")) {
    result = result.slice(7);
  } else if (result.startsWith("https://")) {
    result = result.slice(8);
  }

  if (result.startsWith("www.")) {
    result = result.slice(4);
  }

  let domainEndIndex = result.indexOf(".");
  if (domainEndIndex !== -1) {
    return result.slice(0, domainEndIndex);
  }

  return result;
}

// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };

// console.log(domainName("http://google.com"));
