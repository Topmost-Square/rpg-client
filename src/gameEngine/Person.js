import {GameObject} from "./GameObject";

export class Person extends GameObject {
    movingProgressRemaining = 0;
    isControlled = false;

    directionUpdate = {
        'up': ['y', -1],
        'down': ['y', 1],
        'left': ['x', -1],
        'right': ['x', 1],
    }

    setIsControlled(isControlled) {
        this.isControlled = isControlled;
    }

    update(direction, map) {
        this.updatePosition();
        this.updateSprite(direction);

        if (this.isControlled && this.movingProgressRemaining === 0 && direction) {
            this.direction = direction;

            console.log([this.x, this.y], 'coordinates')
            //
            console.log(map.isSpaceTaken(this.x, this.y, this.direction), 'space taken');

            this.movingProgressRemaining = 16;
        }
    }

    updatePosition() {
        if (this.movingProgressRemaining) {
            //     y          -1
            const [property, change] = this.directionUpdate[this.direction];
            // x or y         1 or -1
            this[property] += change;
            this.movingProgressRemaining -= 1;
        }
    }

    updateSprite(direction) {
        if (this.movingProgressRemaining === 0 && !direction) {
            this.sprite.setAnimation('idle-'+this.direction);
            return;
        }

        if (this.movingProgressRemaining > 0) {
            this.sprite.setAnimation('walk-'+this.direction);
        }
    }
}