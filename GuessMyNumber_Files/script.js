let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = document.querySelector('.highscore').textContent;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guessNum = Number(document.querySelector('.guessNumInput').value);

  if (!guessNum || guessNum < 0) {
    displayMessage('No Number! ⛔');
  } else if (guessNum !== secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guessNum > secretNum ? '📈 Too High!' : '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Game Over!');
    }
  } else if (guessNum === secretNum) {
    displayMessage('🎉 You are right!');
    document.querySelector('body').style.backgroundColor = 'lightgreen';
    document.querySelector('.secretNumDisp').textContent = secretNum;
    document.querySelector('.secretNumDisp').style.fontSize = '4rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.secretNumDisp').textContent = '?';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guessNumInput').value = '';
  document.querySelector('.secretNumDisp').style.fontSize = '4rem';
});
