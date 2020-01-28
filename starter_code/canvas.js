class HangmanCanvas {
  constructor(secretWord) {
    this. canvas = document.getElementById('hangman')
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
    this.letters = this.secretWord.split('');
    this.errorsLeft = 0;
    this.errors = 10;
  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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

    this.context.fillText('Incorrect letters:', 400, 100)
    this.context.fillText('Errors left: ' + this.errors, 400, 60);
  }

  writeCorrectLetter(letter) {
    for (let index=0;index<this.letters.length;index++) {
      if (this.letters[index] == letter) {
        console.log(index);
        this.context.fillText(letter, 800+index*50, 540);
      }
    }
  }

  writeWrongLetter(letter) {
    // this.errors[this.errorsLeft]();
    switch (this.errorsLeft) {
      case 0:
        this.stand();
        break;
      case 1:
        this.pole();
        break;
      case 2:
        this.arm();
        break;
      case 3:
        this.rope();
        break;
      case 4:
        this.head();
        break;
      case 5:
        this.body();
        break;
      case 6:
        this.leg1();
        break;
      case 7:
        this.leg2();
        break;
      case 8:
        this.arm1();
        break;
      case 9:
        this.arm2();
        break;
    }
    this.errorsLeft++;
    this.errors--;

    this.context.fillText(letter + ',', 615+this.errorsLeft*25, 100);
    this.context.clearRect(400, 37, 1000, 30)
    this.context.fillText('Errors left: ' + this.errors, 400, 60);
  }

  drawHangman(shape) {

  }

  gameOver() {

  }

  winner() {

  }

  stand() {
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
  pole() {
    this.context.beginPath();
    this.context.moveTo(175, 500);
    this.context.lineTo(175, 300);
    this.context.stroke();
    this.context.closePath();
  }
  arm() {
    this.context.beginPath();
    this.context.moveTo(175, 300);
    this.context.lineTo(300, 300);
    this.context.stroke();
    this.context.closePath();
  }
  rope() {
    this.context.beginPath();
    this.context.moveTo(300, 300);
    this.context.lineTo(300, 330);
    this.context.stroke();
    this.context.closePath();
  }
  head() {
    this.context.beginPath();
    this.context.arc(300, 360, 30, 0, Math.PI * 2);
    this.context.stroke();
    this.context.closePath();
  }
  body() {
    this.context.beginPath();
    this.context.moveTo(300, 390);
    this.context.lineTo(300, 470);
    this.context.stroke();
    this.context.closePath();
  }
  leg1() {
    this.context.beginPath();
    this.context.moveTo(300, 470);
    this.context.lineTo(330, 520);
    this.context.stroke();
    this.context.closePath();
  }
  leg2() {
    this.context.beginPath();
    this.context.moveTo(300, 470);
    this.context.lineTo(270, 520);
    this.context.stroke();
    this.context.closePath();
  }
  arm1() {
    this.context.beginPath();
    this.context.moveTo(300, 420);
    this.context.lineTo(330, 460);
    this.context.stroke();
    this.context.closePath();
  }
  arm2() {
    this.context.beginPath();
    this.context.moveTo(300, 420);
    this.context.lineTo(270, 460);
    this.context.stroke();
    this.context.closePath();
  }

}