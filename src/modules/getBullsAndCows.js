'use strict';

/**
 * Calculate the number of bulls and cows for a given user input.
 * Bulls are digits that are in the correct position.
 * Cows are digits that are in the wrong position.
 * Assume that the user input and the number to guess
 * are always 4-digit numbers.
 *
 * @param {number} userInput - The user input
 * @param {number} numberToGuess - The number to guess
 * @return {object} An object containing the number of bulls and cows.
 * Example: { bulls: 1, cows: 2 }
 */
function getBullsAndCows(userInput, numberToGuess) {
  let cows = 0;
  let bulls = 0;
  const use = userInput.toString();
  const get = numberToGuess.toString();

  for (let i = 0; i < use.length; i++) {
    if (use[i] === get[i]) {
      bulls++;
    } else if (use.includes(get[i])) {
      cows++;
    }
  }

  return {
    bulls: bulls,
    cows: cows,
  };

  /* Write your code here */
}

module.exports = {
  getBullsAndCows,
};
