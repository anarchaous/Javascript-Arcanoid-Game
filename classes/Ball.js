class Ball {
    constructor() {
        this.position = {
            x: canvas.width/2,
            y: canvas.height/2
        }

        this.velocity = {
            x: 7,
            y: 7,
        }

        this.width = 25;
        this.height = 25;
    }

    draw() {
        ctx.fillStyle = colors.ball;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    youFailed(){
        alert("GAME OVER LOSER")
        location.reload();
    }

    update(player, blocks) {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if(this.position.x + this.width >= canvas.width || this.position.x <= 0) this.velocity.x = -this.velocity.x
        if(  this.position.y <= 0) this.velocity.y = -this.velocity.y
        // this.position.y + this.height >= canvas.height

        if((this.position.y + this.height >= canvas.height)+100) {
           
        }

        if(this.isCollidingWith(player)) {
            this.position.y = player.position.y - this.height
            this.velocity.y = -this.velocity.y
        }

        blocks.forEach(block => {
            if(this.isCollidingWith(block)) {
                // this.position.y = block.position.y+block.height
                this.velocity.y = -this.velocity.y
                let index = blocks.indexOf(block);
                if (index !== -1) {
                    blocks.splice(index, 1); // Удаляем один элемент, начиная с индекса `index`
                }
            }
        }) 
    }

    isCollidingWith(object) {
        // Проверка на столкновение с объектом
        if (this.position.x < object.position.x + object.width &&
            this.position.x + this.width > object.position.x &&
            this.position.y < object.position.y + object.height &&
            this.position.y + this.height > object.position.y) {
            return true;
        }
        return false;
    }
}