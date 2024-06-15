class Player {
    constructor() {
        this.position =  {
            x: canvas.width/2,
            y: canvas.height-30
        }

        this.velocity = {
            x: 0,
            y: 0,
        }

        this.width  = 230;
        this.height = 25;

        this.keys = {
            a: {
                pressed: false,
            },
            d: {
                pressed: false,
            }
        }

        window.addEventListener('keydown', (event) => {
            switch(event.key) {
                case 'a':
                    this.keys.a.pressed = true
                    break
                case 'd':
                    this.keys.d.pressed = true
                    break
            }
        })

        window.addEventListener('keyup', (event) => {
            switch(event.key) {
                case 'a':
                    this.keys.a.pressed = false
                    break
                case 'd':
                    this.keys.d.pressed = false
                    break
            }
        })
    }

    draw() {
        ctx.fillStyle = colors.player;
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    movement() {
       if(this.keys.a.pressed) {
        this.velocity.x = -5
       }
       else if(this.keys.d.pressed) {
        this.velocity.x = 5
       }
       else {
        this.velocity.x = 0
       }

       this.position.x += this.velocity.x
    }
}