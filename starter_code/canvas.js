class HangmanCanvas {
  constructor(secretWord) {
    this. canvas = document.getElementById('hangman')
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
    this.letters = this.secretWord.split('');
    this.errorsLeft = 0;
  }

  createBoard() {
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.context.lineWidth= 3;
    this.context.font='30px arial';
    this.drawLines();
  }

  drawLines() {
    for (let i = 0; this.letters.length > i; i++) {
      this.context.beginPath();
      this.context.moveTo(800+i*50, 550);
      this.context.lineTo(800+i*50+30, 550);
      this.context.stroke();
      this.context.closePath();
    }

    this.context.beginPath();
    this.context.moveTo(100, 550);
    this.context.lineTo(250, 550);
    this.context.stroke();
    this.context.closePath();

    this.context.beginPath();
    this.context.moveTo(100, 550);
    this.context.lineTo(175, 500);
    this.context.stroke();
    this.context.closePath();

    this.context.beginPath();
    this.context.moveTo(250, 550);
    this.context.lineTo(175, 500);
    this.context.stroke();
    this.context.closePath();
  }

  writeCorrectLetter(letter) {
    for (let index=0;index<this.letters.length;index++) {
      if (this.letters[index] == letter) {
        console.log(index);
        this.context.fillText(letter, 800+index*50, 540);
      }
    }
  }

  writeWrongLetter(letter, errorsLeft) {

  }

  drawHangman(shape) {

  }

  gameOver() {

  }

  winner() {

  }

}