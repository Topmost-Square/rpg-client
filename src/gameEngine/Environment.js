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

            // draw game objects
            this.context && Object
                .values(this.map.gameObjects)
                // sort by Y coordinates
                // so object with bigger y (placed lower)
                // drawn above ones place upper
                .sort((a,b) => a.y - b.y)
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

        this.map.mountObjects();

        this.input = new Input();
        this.input.init();

        this.startGameLoop();

        this.map.startCutscene([
            { who: "rickert", type: 'walk', direction: 'down'},
            { who: "rickert", type: 'walk', direction: 'down'},
            { who: "rickert", type: 'walk', direction: 'down'},
            { who: "rickert", type: 'walk', direction: 'down'},
            { who: "npc1", type: 'walk', direction: 'left'},
            { who: "npc1", type: 'walk', direction: 'left'},
            { who: "npc1", type: 'walk', direction: 'left'},
            { who: "npc1", type: 'walk', direction: 'left'},
            { who: "npc1", type: 'walk', direction: 'left'},
            { who: "npc1", type: 'stand', direction: 'up', time: 800},
        ])
    }
}