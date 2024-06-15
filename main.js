let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');

canvas.width = 64 * 18
canvas.height = 64 * 12

const player = new Player()
const ball = new Ball()
const blocks = []

for(let row=0; row<5; row++) {
  for(let col=0; col<10; col++) {
    let x = col * (100+10) + 20
    let y = row * (50+10) + 10
    const block = new Block(x,y)
    blocks.push(block)
  }
}

function mainGame() {
  requestAnimationFrame(mainGame);
  ctx.fillStyle = colors.background;
  ctx.fillRect(0,0,canvas.width,canvas.height)

  player.draw()
  player.movement()

  ball.draw()
  ball.update(player, blocks)

  blocks.forEach(block => {
    block.draw()
  })
}

mainGame();