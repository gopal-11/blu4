// backend/utils/armstrongNumber.js

// Check for armstrong number and returns true or false in array
export const isArmstrong = (number) => {
  const digits = number.toString().split('');
  const order = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit), order),
    0
  );

  if (sum === number) return ['true'];

  return ['false'];
};
