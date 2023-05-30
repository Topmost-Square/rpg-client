export class Sprite {
    animations = {
        idleDown: [
            // x, y
            [0,0]
        ]
    }

    currentAnimation = 'idleDown';
    currentAnimationFrame = 0;
    image;

    gameObject;

    setAnimations(animations) {
        this.animations = animations;
    }

    setCurrentAnimation(currentAnimation) {
        this.currentAnimation = currentAnimation;
    }

    setImage(imageSource) {
        this.image = new Image();
        this.image.src = imageSource;
    }

    setGameObject(gameObject) {
        this.gameObject = gameObject
    }

    draw(context) {
        const x = this.gameObject.x * 16;
        const y = this.gameObject.y * 16;

        context && context.drawImage(
            this.image,
            0,
            0,
            32,
            32,
            x,
            y,
            32,
            32
        );
    }
}