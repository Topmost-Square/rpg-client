import {withGrid} from "./utils";

export class Sprite {
    animations = {
        'idle-down': [[0,0]],
        'idle-right': [[0,1]],
        'idle-up': [[0,2]],
        'idle-left': [[0,3]],
        'walk-down': [[1,0],[0,0],[3,0],[0,0]],
        'walk-right': [[1,1],[0,1],[3,1],[0,1]],
        'walk-up': [[1,2],[0,2],[3,2],[0,2]],
        'walk-left': [[1,3],[0,3],[3,3],[0,3]],
    }

    currentAnimation = 'walk-down';
    currentAnimationFrame = 0;

    animationFrameLimit = 16;
    animationFrameProgress = this.animationFrameLimit;

    image;

    gameObject;

    get frame() {
        //                      'idle-down'                 0,1,2,3
        return this.animations[this.currentAnimation][this.currentAnimationFrame]
    }

    setAnimationFrameLimit(animationFrameLimit) {
        this.animationFrameLimit = animationFrameLimit
    }

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

    setAnimation(key) {
        if (this.currentAnimation !== key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }

    }

    updateAnimationProgress() {
        // down tick frame progress
        if (this.animationFrameProgress > 0) {
            this.animationFrameProgress -= 1;
            return;
        }

        //reset counter
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;

        if (this.frame === undefined) {
            this.currentAnimationFrame = 0;
        }
    }

    draw(context) {
        const x = this.gameObject.x - 8;
        const y = this.gameObject.y - 18;

        const [frameX, frameY] = this.frame;

        context && context.drawImage(
            this.image,
            frameX * 32,
            frameY * 32,
            32,
            32,
            x,
            y,
            32,
            32
        );

        this.updateAnimationProgress();
    }
}