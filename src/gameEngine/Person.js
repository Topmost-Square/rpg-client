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

    startBehavior(type, map, direction) {
        this.direction = direction;
        if (type === 'walk') {
            if (map.isSpaceTaken(this.x, this.y, this.direction)) {
                return
            }
            this.movingProgressRemaining = 16;
        }
    }

    update(direction, map) {
        if (this.movingProgressRemaining) {
            this.updatePosition();
        } else {
            if (this.isControlled && direction) {
                this.startBehavior('walk', map, direction);
            }
            this.updateSprite(direction);
        }
    }

    updatePosition() {
        //     y          -1
        const [property, change] = this.directionUpdate[this.direction];
        // x or y         1 or -1
        this[property] += change;
        this.movingProgressRemaining -= 1;
    }

    updateSprite() {
        if (this.movingProgressRemaining > 0) {
            this.sprite.setAnimation('walk-'+this.direction);
            return;
        }

        this.sprite.setAnimation('idle-'+this.direction);
    }
}