import {GameObject} from "./GameObject";
import rickertImg from './images/rickert-sprite.png';
import map1 from './images/map-1.png'

const rickert = new GameObject();
rickert.setX(5);
rickert.setY(5);
rickert.setSprite(rickertImg)

export const FirstMap = {
    lowerPicture: map1,
    gameObjects: {
        rickert
    }
}