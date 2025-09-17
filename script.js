const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const message = document.getElementById('message');
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = 'Please enter a valid number between 1 and 100.';
    message.style.color = 'orange';
    return;
  }

  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}. Attempts: ${attempts}`;
    message.style.color = 'green';
  } else if (guess < randomNumber) {
    message.textContent = 'Too low! Try again.';
    message.style.color = 'red';
  } else {
    message.textContent = 'Too high! Try again.';
    message.style.color = 'red';
  }
}
