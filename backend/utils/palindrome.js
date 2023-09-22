// backend/utils/palindrome.js

// check palindrome for number and return true or false in array
export const checkPalindrome = (n) => {
  let reverse = 0;
  let temp = n;
  // logic to reverse the number
  while (temp != 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  let result = reverse == n ? 'true' : 'false';
  return [result];
};
