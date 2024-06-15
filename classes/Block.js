class Block {
    constructor(x,y) {
        this.position = {
            x: x,
            y: y,
        }

        this.width = 100
        this.height = 50
    }

    draw() {
        ctx.fillStyle = colors.block2
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}