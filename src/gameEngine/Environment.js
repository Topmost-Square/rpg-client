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

            const cameraPerson = this.map.gameObjects.rickert;

            this.context && Object
                .values(this.map.gameObjects)
                .forEach(object => {
                    object.update(
                        this.input.direction,
                        this.map
                    );
                });

            this.context && this.map.drawLower(this.context, cameraPerson);

            this.context && Object
                .values(this.map.gameObjects)
                .forEach(object => {
                    object.sprite.draw(this.context, cameraPerson)
                });

            this.context && this.map.drawUpper(this.context, cameraPerson);

            requestAnimationFrame(() => step())
        }

        step();
    }

    init() {
        this.map = new GameMap();
        this.map.setLower(FirstMap.lowerPicture);
        this.map.setUpper(FirstMap.upperPicture);
        this.map.setGameObjects(FirstMap.gameObjects);
        this.map.setWalls(FirstMap.walls);

        console.log(this.map.walls, 'walls')

        this.input = new Input();
        this.input.init();

        this.startGameLoop();
    }
}