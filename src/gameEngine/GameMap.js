import {nextPosition, withGrid} from "./utils";

export class GameMap {
    gameObjects;
    lowerPicture;
    upperPicture;

    walls = {};

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

        console.log(x,y, 'NEXT')

        return this.walls[`${x},${y}`] || false;
    }
}