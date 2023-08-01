import rickertImg from './images/rickert-sprite.png';
import npc1Img from './images/npc1.png';
import npc2Img from './images/npc2.png';
import lowerPicture from './images/map-1-bottom.png';
import upperPicture from './images/map-1-top.png';
import {Person} from "./Person";
import {asGridCoordinate, withGrid} from "./utils";

const rickert = new Person();
rickert.setX(withGrid(5));
rickert.setY(withGrid(5));
rickert.setSprite(rickertImg);
rickert.setIsControlled(true);

const npc1 = new Person();
npc1.setX(withGrid(10));
npc1.setY(withGrid(10));
npc1.setSprite(npc1Img);
npc1.setBehaviourLoop([
    { type: 'stand', direction: 'left', time: 800},
    { type: 'stand', direction: 'up', time: 800},
    { type: 'stand', direction: 'right', time: 1200},
    { type: 'stand', direction: 'up', time: 300},
])

const npc2 = new Person();
npc2.setX(withGrid(30));
npc2.setY(withGrid(8));
npc2.setSprite(npc2Img);
npc2.setBehaviourLoop([
    { type: 'walk', direction: 'left'},
    // { type: 'stand', direction: 'up', time: 800},
    { type: 'walk', direction: 'up'},
    { type: 'walk', direction: 'right'},
    { type: 'walk', direction: 'down'},
])

export const FirstMap = {
    lowerPicture,
    upperPicture,
    gameObjects: {
        rickert,
        npc1,
        npc2
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

        [asGridCoordinate(1,16)]: true,
        [asGridCoordinate(2,16)]: true,
        [asGridCoordinate(3,16)]: true,
        [asGridCoordinate(4,16)]: true,
        [asGridCoordinate(5,16)]: true,
        [asGridCoordinate(6,16)]: true,
        [asGridCoordinate(7,16)]: true,
        [asGridCoordinate(8,16)]: true,
        [asGridCoordinate(9,16)]: true,
        [asGridCoordinate(10,16)]: true,
        [asGridCoordinate(11,16)]: true,
        [asGridCoordinate(12,16)]: true,
        [asGridCoordinate(13,16)]: true,
        [asGridCoordinate(14,16)]: true,
        [asGridCoordinate(15,16)]: true,
        [asGridCoordinate(16,16)]: true,
        [asGridCoordinate(17,16)]: true,
        [asGridCoordinate(18,16)]: true,
        [asGridCoordinate(19,16)]: true,
        [asGridCoordinate(20,16)]: true,
        [asGridCoordinate(21,16)]: true,
        [asGridCoordinate(22,16)]: true,
        [asGridCoordinate(23,16)]: true,
        [asGridCoordinate(24,16)]: true,
        [asGridCoordinate(25,16)]: true,
        [asGridCoordinate(26,16)]: true,
        [asGridCoordinate(27,16)]: true,
        [asGridCoordinate(28,16)]: true,
        [asGridCoordinate(29,16)]: true,
        [asGridCoordinate(30,16)]: true,
        [asGridCoordinate(31,16)]: true,
        [asGridCoordinate(32,16)]: true,
        [asGridCoordinate(33,16)]: true,
        [asGridCoordinate(34,16)]: true,
        [asGridCoordinate(35,16)]: true,
        [asGridCoordinate(36,16)]: true,
        [asGridCoordinate(37,16)]: true,
        [asGridCoordinate(38,16)]: true,
        [asGridCoordinate(39,16)]: true,

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