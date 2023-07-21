export default class Player {
    constructor(x, y, bulletController) {
        this.x = x;
        this.y = y;
        this.bulletController = bulletController;
        this.width = 50;
        this.height = 50;
        this.speed = 4;

        document.addEventListener('keydown', this.keydown);
        document.addEventListener('keyup', this.keyup);
    }

    draw(ctx) {
        this.move();
        ctx.strokeStyle = 'yellow';
        ctx.strokeRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height)

        this.shoot();
    }

    shoot() {
        if (this.shootPressed) {
            console.log('shoot');
            const speed = 5;
            const delay = 7;
            const damage = 1;
            const bulletX = this.x + this.width/2;
            const bulletY = this.y;
            this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
        }
    }

    move() {
        if (this.upPressed) {
            this.y -= this.speed
        }

        if (this.downPressed) {
            this.y += this.speed
        }

        if (this.leftPressed) {
            this.x -= this.speed
        }

        if (this.rightPressed) {
            this.x += this.speed
        }
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

        if (e.code === 'Space') {
            this.shootPressed = true;
        }
    };

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

        if (e.code === 'Space') {
            this.shootPressed = false;
        }
    };
}