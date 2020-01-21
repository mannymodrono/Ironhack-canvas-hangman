let hangman;

class Hangman {
  constructor() {
    this.words = ['hang', 'constructor', 'secret', 'winner'];
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
      this.guessedLetter = String.fromCharCode(keyCode);
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

  }

  addWrongLetter(letter) {

  }

  checkGameOver() {

  }

  checkWinner() {

  }

}

document.getElementById('start-game-button').onclick = () => {
  hangman = new Hangman();
};

document.onkeydown = (e) => {

};
