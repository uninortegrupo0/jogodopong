export const player = {
  x: 10,
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

  update(keys, canvas) {
    if (keys.ArrowUp) this.y -= this.speed;
    if (keys.ArrowDown) this.y += this.speed;
    this.y = Math.max(0, Math.min(canvas.height - this.height, this.y));
  }
};
