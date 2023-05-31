import {FirstMap} from "./maps";
import {GameMap} from "./GameMap";
import {Input} from "./Input";

export class Environment {
    canvas;
    context;
    map;
    input;

    setCanvas(canvas) {
        this.canvas = canvas;
    }

    setContext(context) {
        this.context = context;
    }

    startGameLoop() {
        const step = () => {
            this.context.clearRect(0,0, this.canvas.width, this.canvas.height);

            this.context && this.map.drawLower(this.context);

            this.context && Object
                .values(this.map.gameObjects)
                .forEach(object => {
                    object.update(this.input.direction);
                    object.sprite.draw(this.context)
                });

            // this.context && this.map.drawUpper(this.context);

            requestAnimationFrame(() => step())
        }

        step();
    }

    init() {
        this.map = new GameMap();
        this.map.setLower(FirstMap.lowerPicture);
        this.map.setGameObjects(FirstMap.gameObjects);

        this.input = new Input();
        this.input.init();

        this.startGameLoop();
    }
}