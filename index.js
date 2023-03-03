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
