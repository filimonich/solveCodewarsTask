// Training JS #13: Number object and its properties

function whatNumberIsIt(n) {
  let numCheck =
    n === Number.POSITIVE_INFINITY
      ? 'Number.POSITIVE_INFINITY'
      : n === Number.NEGATIVE_INFINITY
      ? 'Number.NEGATIVE_INFINITY'
      : n === Number.MAX_VALUE
      ? 'Number.MAX_VALUE'
      : n === Number.MIN_VALUE
      ? 'Number.MIN_VALUE'
      : Number.isNaN(n)
      ? 'Number.NaN'
      : n;
  return `Input number is ${numCheck}`;
}

// Training JS #14: Methods of Number object--toString() and toLocaleString()

function colorOf(r, g, b) {
  return `#${r < 16 ? '0' : ''}${r.toString(16)}${
    g < 16 ? '0' : ''
  }${g.toString(16)}${b < 16 ? '0' : ''}${b.toString(16)}`;
}

// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()

function howManySmaller(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let rounded = parseFloat(arr[i].toFixed(2));
    if (rounded < n) {
      count++;
    }
  }
  return count;
}

// Training JS #16: Methods of String object--slice(), substring() and substr()

function cutIt(arr) {
  let shortestLength = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortestLength) {
      shortestLength = arr[i].length;
    }
  }
  let shortestStringLength = [];
  for (let i = 0; i < arr.length; i++) {
    shortestStringLength.push(arr[i].substring(0, shortestLength));
  }
  return shortestStringLength;
}

// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

function firstToLast(str, c) {
  const firstPos = str.indexOf(c);
  const lastPos = str.lastIndexOf(c);

  if (firstPos === -1) return -1;
  if (firstPos === lastPos) return 0;
  return lastPos - firstPos;
}

// Training JS #18: Methods of String object--concat() split() and its good friend join()

function splitAndMerge(str, sep) {
  return str
    .split(' ')
    .map(word => word.split('').join(sep))
    .join(' ');
}

// Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()

function alienLanguage(str) {
  return str
    .split(' ')
    .map(word => word.slice(0, -1).toUpperCase() + word.slice(-1).toLowerCase())
    .join(' ');
}

// Training JS #20: Methods of String object--charAt() charCodeAt() and fromCharCode()

function topSecret(str) {
  let decryptedFile = '';
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    // uppercase letters
    if (charCode >= 65 && charCode <= 90)
      charCode = ((charCode - 65 + 23) % 26) + 65;
    // lowercase letters
    if (charCode >= 97 && charCode <= 122)
      charCode = ((charCode - 97 + 23) % 26) + 97;

    decryptedFile += String.fromCharCode(charCode);
  }
  return decryptedFile;
}

// Find out whether the shape is a cube

const cubeChecker = function (volume, side) {
  return volume > 0 && side > 0 && volume === side ** 3;
};

// Chuck Norris VII - True or False? (Beginner)

const ifChuckSaysSo = () => !true;

// ES6 string addition

function joinStrings(string1, string2) {
  return `${string1} ${string2}`;
}

// Remove String Spaces

const noSpace = x => x.split(' ').join('');

// Reversed Strings

const solution = str => str.split('').reverse().join('');

// Square(n) Sum

function squareSum(numbers) {
  return numbers.reduce(function (sum, num) {
    return sum + num * num;
  }, 0);
}

// Multiply

let multiply = (a, b) => a * b;

//Reversed Words

let reverseWords = str => str.split(' ').reverse().join(' '); // reverse those words

//Keep Hydrated!

let litres = time => Math.floor(time / 2);

// Get the mean of an array

let getAverage = arr =>
  Math.floor(arr.reduce((acc, curr) => acc + curr, 0) / arr.length);

// My head is at the wrong end!

let fixTheMeerkat = arr => arr.reverse();

// Count the Monkeys!

function monkeyCount(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

// // Collatz Conjecture (3n+1)

// var hotpo = function (n) {
//   if (n === 0) return 0; //Optional Handler to n = 0
//   if (n === 1) return 0;
//   if (n <= 2) {
//     if (n % 2 === 0) n = n / 2;
//     if (n % 2 != 0) n = n * 3 + 1;
//   }
// };

// Quarter of the year

const quarterOf = month => {
  if (month >= 0 && month <= 3) return 1;
  if (month >= 3 && month <= 6) return 2;
  if (month >= 6 && month <= 9) return 3;
  if (month >= 9 && month <= 12) return 4;
};

// Remove String Spaces // the second solution

// function noSpace(x) {
//   return x.replace(/\s+/g, '');
// }

// Capitalization and Mutability

function capitalizeWord(word) {
  let wordUpper = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    wordUpper += word[i];
  }
  return wordUpper;
}

// Century From Year

function century(year) {
  return Math.ceil(year / 100);
}

// Convert a Number to a String!

function numberToString(num) {
  return num.toString();
}

// Convert a String to a Number!

const stringToNumber = function (str) {
  return +str;
};

// Convert to Binary

function toBinary(n) {
  return +n.toString(2);
}

// Even or Odd

function evenOrOdd(number) {
  let numberOr = number % 2;
  return numberOr === 0 ? 'Even' : 'Odd';
}

// Fake Binary

function fakeBin(x) {
  let xResult = '';
  for (let i = 0; i < x.length; i++) {
    if (parseInt(x[i]) < 5) xResult += '0';
    else xResult += '1';
  }
  return xResult;
}

// Function 1 - hello world

let greet = () => 'hello world!';

// let greet = function () {
//   return 'hello world!';
// };

// Largest Square Inside A Circle

function areaLargestSquare(r) {
  return r ** 2 * 2;
}

// Number of Decimal Digits

function digits(n) {
  return n.toString().length;
}

// Opposite number

function opposite(number) {
  return (number = number ? -number : number);
}

// Perimeter sequence

function perimeterSequence(a, n) {
  return a * 4 * n;
}

// Remove First and Last Character

function removeChar(str) {
  return str.slice(1, -1);
}

// String ends with?

function solution2(str, ending) {
  let i = ending.length;
  let strEnd = str.slice(-i);
  return strEnd === ending ? true : ending === '' ? true : false;
}

// Simple multiplication

function simpleMultiplication(number) {
  let numberEven = number % 2;
  return numberEven === 0 ? number * 8 : number * 9;
}

// String repeat

function repeatStr(n, s) {
  let result = '';
  for (i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

// Student's Final Grade

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if (exam > 75 && projects >= 5) return 90;
  if (exam > 50 && projects >= 2) return 75;
  else return 0;
}

// Switch it Up!

// function switchItUp(number) {
//   let numberCheck =
//     number === 1
//       ? 'One'
//       : number === 2
//       ? 'Two'
//       : number === 3
//       ? 'Three'
//       : number === 4
//       ? 'Four'
//       : number === 5
//       ? 'Five'
//       : number === 6
//       ? 'Six'
//       : number === 7
//       ? 'Seven'
//       : number === 8
//       ? 'Eight'
//       : number === 9
//       ? 'Nine'
//       : 'Zero';
//   return numberCheck;
// }

function switchItUp(number) {
  let numberCheck;
  switch (number) {
    case 1:
      numberCheck = 'One';
      break;
    case 2:
      numberCheck = 'Two';
      break;
    case 3:
      numberCheck = 'Three';
      break;
    case 4:
      numberCheck = 'Four';
      break;
    case 5:
      numberCheck = 'Five';
      break;
    case 6:
      numberCheck = 'Six';
      break;
    case 7:
      numberCheck = 'Seven';
      break;
    case 8:
      numberCheck = 'Eight';
      break;
    case 9:
      numberCheck = 'Nine';
      break;
    default:
      numberCheck = 'Zero';
  }
  return numberCheck;
}

// Thinkful - Logic Drills: Traffic light

function updateLight(currentLight) {
  switch (currentLight) {
    case 'green':
      return 'yellow';
    case 'yellow':
      return 'red';
    default:
      return 'green';
  }
}

// Third Angle of a Triangle

function otherAngle(a, b) {
  return 180 - a - b;
}

// Transportation on vacation

function rentalCarCost(d) {
  let cost = d * 40;
  if (d >= 7) {
    cost -= 50;
  } else if (d >= 3) {
    cost -= 20;
  }
  return cost;
}

// Type of sum

function typeOfSum(a, b) {
  return typeof (a + b);
}

// Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};

// Take an Arrow to the knee, Functionally

const ArrowFunc = function (arr) {
  let result = '';
  for (let num of arr) {
    result += String.fromCharCode(num);
  }
  return result;
};

// Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
      }
    }
  }

  let index = 0;
  let uniqueIndex = 0;

  for (index = 0; index < result.length; index++) {
    if (result[index] !== result[uniqueIndex]) {
      uniqueIndex++;
      result[uniqueIndex] = result[index];
    }
  }

  uniqueIndex++;

  for (let i = result.length - 1; i >= uniqueIndex; i--) {
    result.pop();
  }

  return result;
}

// 16+18=214

function add(num1, num2) {
  let num1String = num1.toString();
  let num2String = num2.toString();

  let maxLength = Math.max(num1String.length, num2String.length);

  num1String = num1String.padStart(maxLength, '0');
  num2String = num2String.padStart(maxLength, '0');

  let resultString = '';
  for (let i = 0; i < maxLength; i++) {
    const digit1 = parseInt(num1String[i]);
    const digit2 = parseInt(num2String[i]);
    resultString += (digit1 + digit2).toString();
  }

  return parseInt(resultString);
}

// Add property to every object in array

for (let i = 0; i < questions.length; i++) {
  questions[i].usersAnswer = null;
}

// Colour Association

function colourAssociation(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let obj = {};
    obj[array[i][0]] = array[i][1];
    result.push(obj);
  }
  return result;
}

// Combine objects

function combine() {
  let result = {};
  for (let i = 0; i < arguments.length; i++) {
    let obj = arguments[i];
    for (let key in obj) {
      if (result.hasOwnProperty(key)) {
        result[key] += obj[key];
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

// Count the Digit

function nbDig(n, d) {
  let count = 0;
  for (let k = 0; k <= n; k++) {
    let square = k * k;
    let digits = square.toString().split('');
    let filteredDigits = digits.filter(digit => digit === d.toString());
    count += filteredDigits.length;
  }
  return count;
}

// Find the missing element between two arrays

function findMissing(arr1, arr2) {
  const initialValue = 0;
  let sum1 = arr1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  let sum2 = arr2.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sum1 - sum2;
}

// Get decimal part of the given number

function getDecimal(n) {
  return Math.abs(n % 1);
}

// Maximum Triplet Sum (Array Series #7)

function maxTriSum(numbers) {
  const uniqueNumbers = [...new Set(numbers)];

  const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);

  const sumOfMaxNumbers =
    sortedNumbers[0] + sortedNumbers[1] + sortedNumbers[2];

  return sumOfMaxNumbers;
}

// Whose bicycle?

function whoseBicycle(diary1, diary2, diary3) {
  const ageTable = {
    // удалить
    firstSonAge: 14,
    secondSonAge: 9,
    thirdSonAge: 8,
  };

  let firstSonSum = 0;
  let secondSonSum = 0;
  let thirdSonSum = 0;

  for (let subject in diary1) {
    firstSonSum += diary1[subject];
  }

  for (let subject in diary2) {
    secondSonSum += diary2[subject];
  }

  for (let subject in diary3) {
    thirdSonSum += diary3[subject];
  }

  console.log(firstSonSum);
  console.log(secondSonSum);
  console.log(firstSonSum);
  console.log(thirdSonSum);
  console.log(ageTable['firstSonAge']);
  console.log(ageTable['secondSonAge']);
  console.log(ageTable['firstSonAge']);
  console.log(ageTable['thirdSonAge']);
  if (firstSonSum > secondSonSum && firstSonSum > thirdSonSum) {
    return 'I need to buy a bicycle for my first son.';
  } else if (secondSonSum > firstSonSum && secondSonSum > thirdSonSum) {
    return 'I need to buy a bicycle for my second son.';
  } else if (thirdSonSum > firstSonSum && thirdSonSum > secondSonSum) {
    return 'I need to buy a bicycle for my third son.';
  } else if (firstSonSum === secondSonSum && firstSonSum === thirdSonSum) {
    if (
      ageTable['firstSonAge'] < ageTable['secondSonAge'] &&
      ageTable['firstSonAge'] < ageTable['thirdSonAge']
    ) {
      return 'I need to buy a bicycle for my first son.';
    } else if (
      ageTable['secondSonAge'] < ageTable['firstSonAge'] &&
      ageTable['secondSonAge'] < ageTable['thirdSonAge']
    ) {
      return 'I need to buy a bicycle for my second son.';
    } else {
      return 'I need to buy a bicycle for my third son.';
    }
  } else if (firstSonSum === secondSonSum) {
    if (ageTable['firstSonAge'] < ageTable['secondSonAge']) {
      return 'I need to buy a bicycle for my first son.';
    } else {
      return 'I need to buy a bicycle for my second son.';
    }
  } else if (firstSonSum === thirdSonSum) {
    if (ageTable['firstSonAge'] < ageTable['thirdSonAge']) {
      return 'I need to buy a bicycle for my first son.';
    } else {
      return 'I need to buy a bicycle for my third son.';
    }
  } else if (secondSonSum === thirdSonSum) {
    if (ageTable['secondSonAge'] < ageTable['thirdSonAge']) {
      return 'I need to buy a bicycle for my second son.';
    } else {
      return 'I need to buy a bicycle for my third son.';
    }
  }
}

// Nickname Generator

function nicknameGenerator(name) {
  if (name.length <= 3) {
    return 'Error: Name too short';
  }
  let vowels = '';
  if (vowels.includes(name[2])) {
    return name.slice(0, 4);
  } else {
    return name.slice(0, 3);
  }
}

// Odd-Even String Sort

function sortMyString(S) {
  let evenIndexedChars = '';
  let oddIndexedChars = '';
  for (let i = 0; i < S.length; i++) {
    if (i % 2 === 0) {
      evenIndexedChars += S[i];
    } else {
      oddIndexedChars += S[i];
    }
  }
  return `${evenIndexedChars} ${oddIndexedChars}`;
}

// Power of two

function isPowerOfTwo(n) {
  if (n === 0) {
    return false;
  }
  if (n === 1) {
    return true;
  }
  if (n % 2 !== 0) {
    return false;
  }
  return isPowerOfTwo(n / 2);
}
