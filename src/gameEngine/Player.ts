import { Character } from './Character';
import { Drawable } from './types/Drawable';
import { Updatable } from './types/Updatable';
import { Controls } from './Controls';
import { Position } from './Position';

export class Player extends Character implements Drawable, Updatable {
	controls: Controls | null = null;
	constructor() {
		super();
		this.controllable = true;
	}

	setControls(controls: Controls) {
		this.controls = controls;
	}

	draw(): void {
		if (!this.ctx || !this.canvas) {
			return;
		}

		this.ctx.fillStyle = 'red';

		const halfCanvasX = Math.ceil(this.canvas.width / 2 / this.cellSize);
		const halfCanvasY = Math.floor(this.canvas.height / 2 / this.cellSize);

		//const
		const totalCellsX = this.canvas.width / this.cellSize;
		//const
		const totalCellsY = this.canvas.height / this.cellSize;

		let drawX = halfCanvasX;
		let drawY = halfCanvasY;

		if (this.position.x < halfCanvasX) {
			drawX = this.position.x;
		}

		if (this.position.y < halfCanvasY) {
			drawY = this.position.y;
		}

		if (this.position.x >= this.mapSize.x - halfCanvasX) {
			drawX = totalCellsX - (this.mapSize.x - this.position.x);
		}

		if (this.position.y >= this.mapSize.y - halfCanvasY) {
			drawY = totalCellsY - (this.mapSize.y - this.position.y);
		}

		//+ 20 means we're moving character by its size
		this.ctx.fillRect(
			drawX * this.cellSize + 20,
			drawY * this.cellSize + 20,
			20,
			20
		);
	}

	speed = 2;

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
