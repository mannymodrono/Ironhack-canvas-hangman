let hangman;

class Hangman {
  constructor() {
    this.words = ['hang', 'secret', 'winner', 'constructor', 'visual'];
    this.secretWord = this.getWord();
    this.letters = [];
    this.guessedLetter;
    this.errorsLeft = 10;
  }

  getWord() {
    return this.words[Math.floor(Math.random() * this.words.length)];
  }

  checkIfLetter(keyCode) {
    if(keyCode >= 65 && keyCode <= 90 && this.letters.includes(String.fromCharCode(keyCode)) === false) {
      console.log(String.fromCharCode(keyCode))
      this.letters.push(String.fromCharCode(keyCode));
      this.checkClickedLetters(String.fromCharCode(keyCode).toLocaleLowerCase())
      return true;
    }
    else{
      return false;
    }
  }

  checkClickedLetters(key) {
    if (this.secretWord.includes(key)) {
      console.log('yes')
      this.addCorrectLetter(key);
    }

    else {
      console.log('no')
      this.addWrongLetter(key);
    }
  }

  addCorrectLetter(key) {
    canvas.writeCorrectLetter(key);
    this.checkWinner();
  }

  addWrongLetter(letter) {
    canvas.writeWrongLetter(letter);
    this.errorsLeft --;
    this.checkGameOver();
  }

  checkGameOver() {
    if (this.errorsLeft <= 0) {
      alert('you lost');
      hangman = new Hangman();
      canvas = new HangmanCanvas(hangman.secretWord);
      canvas.createBoard();
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
  hangman.checkIfLetter(e.keyCode);
};
