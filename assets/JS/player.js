export default class Player {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 4;

        document.addEventListener('keydown', this.keydown);
        document.addEventListener('keyup', this.keyup);
    }

    draw(ctx) {
        ctx.strokeStyle = 'yellow';
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    keydown = (e) => {
        if (e.code === 'KeyW') {
            this.upPressed = true;
        }

        if (e.code === 'KeyS') {
            this.downPressed = true;
        }

        if (e.code === 'KeyA') {
            this.leftPressed = true;
        }

        if (e.code === 'KeyD') {
            this.rightPressed = true;
        }
    }

    keyup = (e) => {
        if (e.code === 'KeyW') {
            this.upPressed = false;
        }

        if (e.code === 'KeyS') {
            this.downPressed = false;
        }

        if (e.code === 'KeyA') {
            this.leftPressed = false;
        }

        if (e.code === 'KeyD') {
            this.rightPressed = false;
        }
    }
}