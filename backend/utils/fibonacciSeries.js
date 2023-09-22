// backend/utils/fibonacciSeries.js

// Generate fibonacci series up to a certain number & return in array
export const getFibonacciSeries = (number) => {
  // if number is less than 0 send error msg
  if (number < 0) return ['please provide positive number'];
  let n1 = 0,
    n2 = 1,
    nextTerm;
  let result = [];
  if (number >= 0) result.push(0);
  if (number >= 1) result.push(1);

  nextTerm = n1 + n2;

  while (nextTerm <= number) {
    // print the next term
    result.push(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }

  return result;
};
