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
