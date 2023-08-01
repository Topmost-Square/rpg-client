import {Sprite} from "./Sprite";
import {EventHandler} from "./EventHandler";

export class GameObject {
    id = null;
    x = 0;
    y = 0;
    sprite;
    direction = 'down';
    isMounted = false;
    behaviourLoop = [];
    behaviourLoopIndex = 0;

    setBehaviourLoop(behaviourLoop) {
        this.behaviourLoop = behaviourLoop;
    }

    mount(map) {
        this.isMounted = true;
        map.addWall(this.x, this.y);

        // if we have behaviour kick off after short delay

        setTimeout(() => {
            this.doBehaviour(map);
        }, 10);

    }

    async doBehaviour(map) {
        if (map.isCutscenePlaying || this.behaviourLoop.length === 0) {
            return;
        }

        let event = this.behaviourLoop[this.behaviourLoopIndex];

        event.who = this.id;

        const eventHandler = new EventHandler();

        eventHandler.setMap(map);
        eventHandler.setEvent(event);
        await eventHandler.init();

        // setting next event to fire
        this.behaviourLoopIndex++;

        if (this.behaviourLoopIndex === this.behaviourLoop.length) {
            this.behaviourLoopIndex = 0;
        }

        // recursion
        this.doBehaviour(map);
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