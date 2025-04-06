import { Position } from './Position';
import { Drawable } from './types/Drawable';
import { Updatable } from './types/Updatable';

export class Character implements Drawable, Updatable {
	position: Position = { x: 0, y: 0 };
	controllable: boolean = false;

	canvas: HTMLCanvasElement | null = null;
	ctx: CanvasRenderingContext2D | null = null;

	setPosition(position: Position): void {
		this.position.x = position.x;
		this.position.y = position.y;
	}

	getPosition(): Position {
		return this.position;
	}

	setCanvas(canvas: HTMLCanvasElement | null): void {
		this.canvas = canvas;
	}

	setContext(ctx: CanvasRenderingContext2D | null) {
		this.ctx = ctx;
	}

	draw(): void {
		if (!this.ctx || !this.canvas) {
			return;
		}
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.fillStyle = 'red';

		this.ctx.fillRect(this.getPosition().x, this.getPosition().y, 20, 20);
	}

	update(): void {
		//set random position from -.1 to .1
		const newPlayerPosition = new Position(
			this.getPosition().x + 0.1 * (Math.floor(Math.random() * 3) - 1),
			this.getPosition().y + 0.1 * (Math.floor(Math.random() * 3) - 1)
		);
		this?.setPosition(newPlayerPosition);
	}
}
