import rickertImg from './images/rickert-sprite.png';
import lowerPicture from './images/map-1-bottom.png';
import upperPicture from './images/map-1-top.png';
import {Person} from "./Person";
import {asGridCoordinate, withGrid} from "./utils";

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
    lowerPicture,
    upperPicture,
    gameObjects: {
        rickert,
        npc
    },
    walls: {
        [asGridCoordinate(0,0)]: true,

        [asGridCoordinate(0,1)]: true,
        [asGridCoordinate(0,2)]: true,
        [asGridCoordinate(0,3)]: true,
        [asGridCoordinate(0,4)]: true,
        [asGridCoordinate(0,5)]: true,
        [asGridCoordinate(0,6)]: true,
        [asGridCoordinate(0,7)]: true,
        [asGridCoordinate(0,8)]: true,
        [asGridCoordinate(0,9)]: true,
        [asGridCoordinate(0,10)]: true,
        [asGridCoordinate(0,11)]: true,
        [asGridCoordinate(0,12)]: true,
        [asGridCoordinate(0,13)]: true,
        [asGridCoordinate(0,14)]: true,
        [asGridCoordinate(0,15)]: true,
        [asGridCoordinate(0,16)]: true,
        [asGridCoordinate(0,17)]: true,
        [asGridCoordinate(0,18)]: true,
        [asGridCoordinate(0,19)]: true,

        [asGridCoordinate(1,0)]: true,
        [asGridCoordinate(2,0)]: true,
        [asGridCoordinate(3,0)]: true,
        [asGridCoordinate(4,0)]: true,
        [asGridCoordinate(5,0)]: true,
        [asGridCoordinate(6,0)]: true,
        [asGridCoordinate(7,0)]: true,
        [asGridCoordinate(8,0)]: true,
        [asGridCoordinate(9,0)]: true,
        [asGridCoordinate(10,0)]: true,
        [asGridCoordinate(11,0)]: true,
        [asGridCoordinate(12,0)]: true,
        [asGridCoordinate(13,0)]: true,
        [asGridCoordinate(14,0)]: true,
        [asGridCoordinate(15,0)]: true,
        [asGridCoordinate(16,0)]: true,
        [asGridCoordinate(17,0)]: true,
        [asGridCoordinate(18,0)]: true,
        [asGridCoordinate(19,0)]: true,
        [asGridCoordinate(20,0)]: true,
        [asGridCoordinate(21,0)]: true,
        [asGridCoordinate(22,0)]: true,
        [asGridCoordinate(23,0)]: true,
        [asGridCoordinate(24,0)]: true,
        [asGridCoordinate(25,0)]: true,
        [asGridCoordinate(26,0)]: true,
        [asGridCoordinate(27,0)]: true,
        [asGridCoordinate(28,0)]: true,
        [asGridCoordinate(29,0)]: true,
        [asGridCoordinate(30,0)]: true,
        [asGridCoordinate(31,0)]: true,
        [asGridCoordinate(32,0)]: true,
        [asGridCoordinate(33,0)]: true,
        [asGridCoordinate(34,0)]: true,
        [asGridCoordinate(35,0)]: true,
        [asGridCoordinate(36,0)]: true,
        [asGridCoordinate(37,0)]: true,
        [asGridCoordinate(38,0)]: true,
        [asGridCoordinate(39,0)]: true,

        // by the see

        [asGridCoordinate(1,14)]: true,
        [asGridCoordinate(2,14)]: true,
        [asGridCoordinate(3,14)]: true,
        [asGridCoordinate(4,14)]: true,
        [asGridCoordinate(5,14)]: true,
        [asGridCoordinate(6,14)]: true,
        [asGridCoordinate(7,14)]: true,
        [asGridCoordinate(8,14)]: true,
        [asGridCoordinate(9,14)]: true,
        [asGridCoordinate(10,14)]: true,
        [asGridCoordinate(11,14)]: true,
        [asGridCoordinate(12,14)]: true,
        [asGridCoordinate(13,14)]: true,
        [asGridCoordinate(14,14)]: true,
        [asGridCoordinate(15,14)]: true,
        [asGridCoordinate(16,14)]: true,
        [asGridCoordinate(17,14)]: true,
        [asGridCoordinate(18,14)]: true,
        [asGridCoordinate(19,14)]: true,
        [asGridCoordinate(20,14)]: true,
        [asGridCoordinate(21,14)]: true,
        [asGridCoordinate(22,14)]: true,
        [asGridCoordinate(23,14)]: true,
        [asGridCoordinate(24,14)]: true,
        [asGridCoordinate(25,14)]: true,
        [asGridCoordinate(26,14)]: true,
        [asGridCoordinate(27,14)]: true,
        [asGridCoordinate(28,14)]: true,
        [asGridCoordinate(29,14)]: true,
        [asGridCoordinate(30,14)]: true,
        [asGridCoordinate(31,14)]: true,
        [asGridCoordinate(32,14)]: true,
        [asGridCoordinate(33,14)]: true,
        [asGridCoordinate(34,14)]: true,
        [asGridCoordinate(35,14)]: true,
        [asGridCoordinate(36,14)]: true,
        [asGridCoordinate(37,14)]: true,
        [asGridCoordinate(38,14)]: true,
        [asGridCoordinate(39,14)]: true,

        // by the see

        [asGridCoordinate(39,1)]: true,
        [asGridCoordinate(39,2)]: true,
        [asGridCoordinate(39,3)]: true,
        [asGridCoordinate(39,4)]: true,
        [asGridCoordinate(39,5)]: true,
        [asGridCoordinate(39,6)]: true,
        [asGridCoordinate(39,7)]: true,
        [asGridCoordinate(39,8)]: true,
        [asGridCoordinate(39,9)]: true,
        [asGridCoordinate(39,10)]: true,
        [asGridCoordinate(39,11)]: true,
        [asGridCoordinate(39,12)]: true,
        [asGridCoordinate(39,13)]: true,
        [asGridCoordinate(39,14)]: true,
        [asGridCoordinate(39,15)]: true,
        [asGridCoordinate(39,16)]: true,
        [asGridCoordinate(39,17)]: true,
        [asGridCoordinate(39,18)]: true,
        [asGridCoordinate(39,19)]: true,

        //objects
        [asGridCoordinate(17,11)]: true,
        [asGridCoordinate(18,11)]: true,
        [asGridCoordinate(19,11)]: true,
        [asGridCoordinate(20,11)]: true,
        [asGridCoordinate(21,11)]: true,
        [asGridCoordinate(22,11)]: true,

        [asGridCoordinate(29,4)]: true,
        [asGridCoordinate(30,4)]: true,

        [asGridCoordinate(31,6)]: true,
        [asGridCoordinate(32,6)]: true,

    }
}