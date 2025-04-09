import { Position } from './Position';

export class Character {
	cellSize = 1;
	position: Position = { x: 0, y: 0 };
	controllable: boolean = false;
	mapSize = { x: 0, y: 0 };
	totalCells = { x: 0, y: 0 };
	halfCanvas = { x: 0, y: 0 };

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
		this.totalCells = {
			x: this.canvas ? this.canvas.width / this.cellSize : 0,
			y: this.canvas ? this.canvas.height / this.cellSize : 0,
		};

		this.halfCanvas = {
			x: this.canvas ? Math.ceil(this.canvas.width / 2 / this.cellSize) : 0,
			y: this.canvas ? Math.floor(this.canvas.height / 2 / this.cellSize) : 0,
		};
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
