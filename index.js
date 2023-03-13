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

function ifChuckSaysSo() {
  return !true;
}

// ES6 string addition

function joinStrings(string1, string2) {
  return `${string1} ${string2}`;
}

// Remove String Spaces

function noSpace(x) {
  return x.replace(/ /g, '');
}
