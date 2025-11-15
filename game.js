import { player } from "./player.js";
import { enemy } from "./enemy.js";
import { ball } from "./ball.js";

const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

const keys = { ArrowUp: false, ArrowDown: false };
document.addEventListener("keydown", (e) => {
  if (keys.hasOwnProperty(e.key)) keys[e.key] = true;
});
document.addEventListener("keyup", (e) => {
  if (keys.hasOwnProperty(e.key)) keys[e.key] = false;
});

function drawField() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;

  // linha do meio tracejada
  ctx.beginPath();
  for (let y = 0; y < canvas.height; y += 20) {
    ctx.moveTo(canvas.width / 2, y);
    ctx.lineTo(canvas.width / 2, y + 10);
  }
  ctx.stroke();

  // placar no centro
  ctx.font = "48px monospace";
  ctx.fillStyle = "rgba(255,255,255,0.2)";
  ctx.textAlign = "center";
  ctx.fillText(`${player.score}   ${enemy.score}`, canvas.width / 2, canvas.height / 2 + 15);
}

function loop() {
  player.update(keys, canvas);
  enemy.update(ball, canvas);
  ball.update(player, enemy, canvas);

  drawField();
  player.draw(ctx);
  enemy.draw(ctx);
  ball.draw(ctx);

  requestAnimationFrame(loop);
}

loop();
