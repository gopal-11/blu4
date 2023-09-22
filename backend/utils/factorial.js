// backend/utils/factorial.js

// Calculate the factorial and return result in array
export const getFactorial = (n) => {
  if (n < 0) {
    return ['number has to be positive.'];
  }

  //base case
  if (n == 0 || n == 1) {
    return 1;
    //recursive case
  } else {
    return [n * getFactorial(n - 1)];
  }
};
