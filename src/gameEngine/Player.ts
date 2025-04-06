import { Character } from './Character';

export class Player extends Character {
	constructor() {
		super();
		this.controllable = true;
	}
}
