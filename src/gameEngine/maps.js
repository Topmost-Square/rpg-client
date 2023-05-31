import {GameObject} from "./GameObject";
import rickertImg from './images/rickert-sprite.png';
import map1 from './images/map-1.png'
import {Person} from "./Person";
import {withGrid} from "./utils";

const rickert = new Person();
rickert.setX(withGrid(5));
rickert.setY(withGrid(5));
rickert.setSprite(rickertImg);
rickert.setIsControlled(true);

const npc = new Person();
npc.setX(withGrid(10));
npc.setY(withGrid(10));
npc.setSprite(rickertImg);

export const FirstMap = {
    lowerPicture: map1,
    gameObjects: {
        rickert,
        npc
    }
}