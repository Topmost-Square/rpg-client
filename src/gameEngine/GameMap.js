export class GameMap {
    gameObjects;
    lowerPicture;
    upperPicture;

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

    drawLower(context) {
        context && this.lowerPicture && context.drawImage(this.lowerPicture, 0, 0);
    }

    drawUpper(context) {
        context.drawImage(this.upperPicture, 0, 0);
    }
}