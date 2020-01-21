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
    document.addEventListener('keydown', function(event) {
      if(event.keyCode >= 65 && event.keyCode <= 90) {
          return true;
      }
      else{
          return false;
      }
  });
  }

  checkClickedLetters(key) {

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
