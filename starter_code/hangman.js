let hangman;

class Hangman {
  constructor() {
    this.words = ['hang', 'secret', 'winner'];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter;
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <= 90) {
      this.letters.push(String.fromCharCode(keyCode));
      return true;
    }
    else{
      return false;
    }
  }

  checkClickedLetters(key) {
    if (this.letters.includes(key)) {
      return false;
    }
    else {
      return true;
    }
  }

  addCorrectLetter(i) {
    this.guessedLetter = this.secretWord.split('')[i].toUpperCase();
  }

  addWrongLetter(letter) {
    this.errorsLeft -= 1;
  }

  checkGameOver() {
    if (this.errorsLeft <= 0) {
      return true;
    }
    else {
      return false;
    }
  }

  checkWinner() {
    let length = 0;
    let correctLetters = this.letters.filter((i) => this.secretWord.includes(i));
    this.letters.forEach((i) => {
    if (this.secretWord.includes(i)) {
      length ++;
    }
  });

    if (length === correctLetters.length) {
      return true;
    }
    else {
      return false;
    }
  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
  canvas = new HangmanCanvas(hangman.secretWord);
  canvas.createBoard();
};

document.onkeydown = (e) => {

};
