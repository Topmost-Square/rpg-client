import {FirstMap} from "./maps";
import {GameMap} from "./GameMap";

export class Environment {
    canvas;
    context;
    map;

    setCanvas(canvas) {
        this.canvas = canvas;
    }

    setContext(context) {
        this.context = context;
    }

    startGameLoop() {
        this.context && this.map.drawLower(this.context)

        this.context && Object
            .values(this.map.gameObjects)
            .forEach(object => object.sprite.draw(this.context))

        const step = () => {
            requestAnimationFrame(() => step())
        }

        step();
    }

    init() {
        this.map = new GameMap();
        this.map.setLower(FirstMap.lowerPicture);
        this.map.setGameObjects(FirstMap.gameObjects);

        this.startGameLoop();
    }
}