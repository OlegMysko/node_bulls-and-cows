'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber() {
  /* Write your code here */
  const randomNumberArray = Math.floor(Math.random() * 100000000)
    .toString()
    .split('');
  const result = randomNumberArray.reduce((acum, value) => {
    if (!acum.includes(value)) {
      return acum.concat(value);
    }

    return acum;
  }, []);

  if (result[0] === '0') {
    result.shift();
  }

  if (result.length < 4) {
    return generateRandomNumber();
  }

  return +result.slice(0, 4).join('');
}

module.exports = {
  generateRandomNumber,
};
