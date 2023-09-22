// backend/controllers/NumberController.js
import { generatePrime } from '../utils/primeNumber.js';
import { getFibonacciSeries } from '../utils/fibonacciSeries.js';
import { getFactorial } from '../utils/factorial.js';
import { isArmstrong } from '../utils/armstrongNumber.js';
import { checkPalindrome } from '../utils/palindrome.js';

const internalServerErrMsg = 'Internal Server Error';

/**
 * /api/numbers
 *   post:
 *     tags:
 *       - numbers
 *     @description : returns the output array using input value and selected option
 *     parameters:
 *       - value: positive number
 *       - type: string
 *     response:
 *       200:
 *          description: single object with outputArray and value
 */
export const addNumber = (req, res) => {
  try {
    const { value, type } = req.body;
    let result;
    // switch expression to generate results on the basis of type selected
    switch (type) {
      case 'prime':
        result = generatePrime(value);
        break;
      case 'fibonacci series':
        result = getFibonacciSeries(value);
        break;
      case 'factorial':
        result = getFactorial(value);
        break;
      case 'armstrong number':
        result = isArmstrong(value);
        break;
      case 'palindrome':
        result = checkPalindrome(value);
        break;
      default:
        result = [];
    }

    res.json({ outputArray: result, value });
  } catch (error) {
    res.status(500).json({ error: internalServerErrMsg });
  }
};
