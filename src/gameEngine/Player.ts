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
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.fillStyle = 'red';

		this.ctx.fillRect(this.getPosition().x, this.getPosition().y, 20, 20);
	}

	getDeltas() {
		return {
			dx: this.controls?.controls.left
				? -1
				: this.controls?.controls.right
				? 1
				: 0,
			dy: this.controls?.controls.up
				? -1
				: this.controls?.controls.down
				? 1
				: 0,
		};
	}

	update(): void {
		const { dx, dy } = this.getDeltas();
		const newPlayerPosition = new Position(
			this.getPosition().x + dx,
			this.getPosition().y + dy
		);
		this?.setPosition(newPlayerPosition);
	}
}
