// backend/utils/primeNumber.js

// checks given number is prime & return true or false
const isPrime = (n) => {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

// Generate array of the prime numbers upto certain number provided
export const generatePrime = (num) => {
  const arr = [];
  let i = 2;
  while (i <= num) {
    if (isPrime(i)) {
      arr.push(i);
    }
    i = i === 2 ? i + 1 : i + 2;
  }
  return arr;
};
