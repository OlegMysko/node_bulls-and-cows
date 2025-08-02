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
function getBullsAndCows(secret, guess) {
  let bulls = 0;
  let cows = 0;

  const useChecked = Array(4).fill(false);
  const guessChecked = Array(4).fill(false);

  for (let i = 0; i < 4; i++) {
    if (secret[i] === guess[i]) {
      bulls++;
      useChecked[i] = true;
      guessChecked[i] = true;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (guessChecked[i]) continue;

    for (let j = 0; j < 4; j++) {
      if (!useChecked[j] && guess[i] === secret[j]) {
        cows++;
        useChecked[j] = true;
        break;
      }
    }
  }

  return { bulls, cows };
}

module.exports = {
  getBullsAndCows,
};
