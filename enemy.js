export const enemy = {
  x: 600 - 20,
  y: 200 - 30,
  width: 10,
  height: 60,
  speed: 3,
  score: 0,
  color: "white",

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },

  update(ball, canvas) {
    // só se move quando a bola vai pra direita
    if (ball.speedX > 0) {
      if (this.y + this.height / 2 < ball.y) this.y += this.speed;
      if (this.y + this.height / 2 > ball.y) this.y -= this.speed;
    }
    this.y = Math.max(0, Math.min(canvas.height - this.height, this.y));
  }
};
