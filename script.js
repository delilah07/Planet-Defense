class Planet {
  constructor(game) {
    this.game = game;
    console.log(this.game);
    this.x = this.game.width / 2;
    this.y = this.game.height / 2;
    this.radius = 80;
    this.image = document.getElementById('planet');
  }
  draw(context) {
    context.drawImage(
      this.image,
      this.x - this.radius - 20,
      this.y - this.radius - 20
    );
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.stroke();
  }
}

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.planet = new Planet(this);
  }
  render(context) {
    this.planet.draw(context);
  }
}

window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth - 30;
  canvas.height = window.innerHeight - 30;
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2;

  const game = new Game(canvas);
  game.render(ctx);
});
