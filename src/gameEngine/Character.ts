import { Position } from './Position';

export class Character {
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
}
