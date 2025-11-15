export const ball = {
  x: 300,
  y: 200,
  radius: 5,
  speedX: 5,
  speedY: 5,
  color: "white",

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  },

  reset(canvas) {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.speedX = (Math.random() > 0.5 ? 1 : -1) * 3;
    this.speedY = (Math.random() > 0.5 ? 1 : -1) * 3;
  },

  update(player, enemy, canvas) {
    this.x += this.speedX;
    this.y += this.speedY;

    // topo/base
    if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
      this.speedY *= -1;
    }

    // colisão player
    if (
      this.x - this.radius < player.x + player.width &&
      this.y > player.y &&
      this.y < player.y + player.height
    ) {
      this.speedX = Math.abs(this.speedX);
    }

    // colisão inimigo
    if (
      this.x + this.radius > enemy.x &&
      this.y > enemy.y &&
      this.y < enemy.y + enemy.height
    ) {
      this.speedX = -Math.abs(this.speedX);
    }

    // ponto
    if (this.x < 0) {
      enemy.score++;
      this.reset(canvas);
    }
    if (this.x > canvas.width) {
      player.score++;
      this.reset(canvas);
    }
  }
};
