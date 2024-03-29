import {GameObject} from "./GameObject";
import {emitEvent} from "./utils";

export class Person extends GameObject {
    movingProgressRemaining = 0;
    isControlled = false;
    isStanding = false;

    directionUpdate = {
        'up': ['y', -1],
        'down': ['y', 1],
        'left': ['x', -1],
        'right': ['x', 1],
    }

    setIsControlled(isControlled) {
        this.isControlled = isControlled;
    }

    startBehavior(type, map, direction, retry = false, time = 100) {
        this.direction = direction;
        if (type === 'walk') {
            // stop here if space is not free
            if (map.isSpaceTaken(this.x, this.y, this.direction)) {

                retry && setTimeout(() => {
                    this.startBehavior(type, map, direction, retry)
                }, 10);

                return
            }

            map.moveWall(this.x, this.y, this.direction);
            this.movingProgressRemaining = 16;
            this.updateSprite(direction);
        }

        if (type === 'stand') {
            this.isStanding = true;
            setTimeout(() => {
                emitEvent('PersonStandComplete', {
                    whoId: this.id
                });
                this.isStanding = false;
            }, time);
        }
    }

    update(direction, map) {
        if (this.movingProgressRemaining) {
            this.updatePosition();
        } else {
            if (!map.isCutscenePlaying && this.isControlled && direction) {
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

        if (this.movingProgressRemaining === 0) {
            // finished walking
            // fire event to use externally
            emitEvent('PersonWalkingComplete', {
                whoId: this.id
            });
        }
    }

    updateSprite() {
        if (this.movingProgressRemaining > 0) {
            this.sprite.setAnimation('walk-'+this.direction);
            return;
        }

        this.sprite.setAnimation('idle-'+this.direction);
    }
}