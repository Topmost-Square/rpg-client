import {nextPosition, withGrid} from "./utils";

export class GameMap {
    gameObjects;
    lowerPicture;
    upperPicture;

    walls = {};

    isCutscenePlaying = false;

    setIsCutscene(isCutscenePlaying) {
        this.isCutscenePlaying = isCutscenePlaying;
    }

    setWalls(walls) {
        this.walls = walls;
    }

    setGameObjects(gameObjects) {
        this.gameObjects = gameObjects
    }

    setLower(imageSource) {
        this.lowerPicture = new Image();
        this.lowerPicture.src = imageSource;
    }

    setUpper(imageSource) {
        this.upperPicture = new Image();
        this.upperPicture.src = imageSource;
    }

    drawLower(context, cameraPerson) {
        context && this.lowerPicture && context.drawImage(
            this.lowerPicture,
            withGrid(10) - cameraPerson.x,
            withGrid(6) - cameraPerson.y
        );
    }

    drawUpper(context, cameraPerson) {
        context.drawImage(
            this.upperPicture,
            withGrid(10) - cameraPerson.x,
            withGrid(6) - cameraPerson.y
        );
    }

    isSpaceTaken(currentX, currentY, direction) {
        const {x,y} = nextPosition(currentX, currentY, direction);
        return this.walls[`${x},${y}`] || false;
    }

    mountObjects() {
        Object.keys(this.gameObjects).forEach(key => {

            let object = this.gameObjects[key];

            object.id = key;


            //TODO: determine if this object should really be mounted
            // for example if there's some items,
            // and we picked that already we won't mount it
                object.mount(this)
        });
    }

    addWall(x,y) {
        this.walls[`${x},${y}`] = true;
    }

    removeWall(x,y) {
        delete this.walls[`${x},${y}`];
    }

    moveWall(wasX, wasY, direction) {
        this.removeWall(wasX, wasY);
        const {x,y} = nextPosition(wasX, wasY, direction);
        this.addWall(x,y);
    }
}