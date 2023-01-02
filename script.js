'use strict';

// LECTURE: Selecting and Manipulating Elements
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/

// LECTURE: Handling Click Events

// define a secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const diplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// select button element, and add eventlistener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // no input
  if (!guess) {
    diplayMessage('No number!');

    // guess is correct
  } else if (guess === secretNumber) {
    diplayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      diplayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = '0';
    }
  }
});

// Coding Challenge #1
// Again button to reset the game
document.querySelector('.again').addEventListener('click', function () {
  // reset the score & secret number
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // text messages
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = null;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  // background color and width
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
