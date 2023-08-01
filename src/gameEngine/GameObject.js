import {Sprite} from "./Sprite";

export class GameObject {
    x = 0;
    y = 0;
    sprite;
    direction = 'down';
    isMounted = false;

    mount(map) {
        this.isMounted = true;
        map.addWall(this.x, this.y);
    }

    setDirection(direction) {
        this.direction = direction;
    }

    setX(x) {
        this.x = x
    }

    setY(y) {
        this.y = y
    }

    setSprite(spritePath) {
        this.sprite = new Sprite();
        this.sprite.setImage(spritePath);
        this.sprite.setGameObject(this);
    }

    update() {

    }
}