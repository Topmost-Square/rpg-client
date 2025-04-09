import { Character } from './Character';
import { Drawable } from './types/Drawable';
import { Updatable } from './types/Updatable';
import { Controls } from './Controls';
import { Position } from './Position';

export class Player extends Character implements Drawable, Updatable {
	controls: Controls | null = null;
	speed = 1;

	constructor() {
		super();
		this.controllable = true;
	}

	setSpeed(speed: number) {
		this.speed = speed;
	}

	setControls(controls: Controls) {
		this.controls = controls;
	}

	getDrawCoordinates() {
		let drawX = this.halfCanvas.x;
		let drawY = this.halfCanvas.y;

		if (this.position.x < this.halfCanvas.x) {
			drawX = this.position.x;
		}

		if (this.position.y < this.halfCanvas.y) {
			drawY = this.position.y;
		}

		if (this.position.x >= this.mapSize.x - this.halfCanvas.x) {
			drawX = this.totalCells.x - (this.mapSize.x - this.position.x);
		}

		if (this.position.y >= this.mapSize.y - this.halfCanvas.y) {
			drawY = this.totalCells.y - (this.mapSize.y - this.position.y);
		}

		return { drawX, drawY };
	}

	draw(): void {
		if (!this.ctx || !this.canvas) {
			return;
		}

		this.ctx.fillStyle = 'red';

		const { drawX, drawY } = this.getDrawCoordinates();

		//+ 20 means we're moving character by its size
		this.ctx.fillRect(
			drawX * this.cellSize + 20,
			drawY * this.cellSize + 20,
			20,
			20
		);
	}

	getDeltas() {
		return {
			dx: this.controls?.controls.left
				? -this.speed
				: this.controls?.controls.right
				? this.speed
				: 0,
			dy: this.controls?.controls.up
				? -this.speed
				: this.controls?.controls.down
				? this.speed
				: 0,
		};
	}

	update(): void {
		const { dx, dy } = this.getDeltas();
		const newPlayerPosition = new Position(
			this.getPosition().x + dx / this.cellSize,
			this.getPosition().y + dy / this.cellSize
		);

		this?.setPosition(newPlayerPosition);
	}
}
