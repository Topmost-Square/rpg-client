import { Position } from './Position';

export class Character {
	cellSize = 1;
	position: Position = { x: 0, y: 0 };
	controllable: boolean = false;
	mapSize = { x: 0, y: 0 };

	canvas: HTMLCanvasElement | null = null;
	ctx: CanvasRenderingContext2D | null = null;

	setPosition(position: Position): void {
		this.position.x = position.x;
		this.position.y = position.y;
	}

	setMapSize(mapSize: { x: number; y: number }): void {
		this.mapSize = mapSize;
	}

	setCellSize(cellSize: number): void {
		this.cellSize = cellSize;
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
