import { Map } from './Map';
import { Player } from './Player';

export class Game {
	player: Player | null = null;
	map: Map | null = null;
	mapSize: { x: number; y: number } | null = null;
	canvas: HTMLCanvasElement | null = null;
	ctx: CanvasRenderingContext2D | null = null;
	cellSize = 0;

	setPlayer(player: Player | null) {
		this.player = player;
	}

	setMap(map: Map | null) {
		this.map = map;
	}

	setCanvas(canvas: HTMLCanvasElement | null): void {
		this.canvas = canvas;
	}

	setContext(ctx: CanvasRenderingContext2D | null) {
		this.ctx = ctx;
	}

	setMapSize(mapSize: { x: number; y: number }): void {
		this.mapSize = mapSize;
	}

	halfCanvas = {
		x: 0,
		y: 0,
	};

	setCellSize(cellSize: number): void {
		this.cellSize = cellSize;

		this.halfCanvas = {
			x: this.canvas ? Math.ceil(this.canvas.width / this.cellSize / 2) : 0,
			y: this.canvas ? Math.floor(this.canvas.height / this.cellSize / 2) : 0,
		};
	}

	getMapInitVals() {
		if (!this.player || !this.canvas || !this.mapSize || !this.map) {
			return { drawX: 0, drawY: 0 };
		}

		const { x, y } = this.player.getPosition();

		let drawX = 0;
		let drawY = 0;

		if (x > this.halfCanvas.x) {
			drawX = x - this.halfCanvas.x;
		}

		if (x >= this.mapSize.x - this.halfCanvas.x) {
			drawX = Math.max(
				0,
				this.mapSize.x - Math.ceil(this.canvas.width / this.cellSize)
			);
		}

		if (y > this.halfCanvas.y) {
			drawY = y - this.halfCanvas.y;
		}

		if (y >= this.mapSize.y - this.halfCanvas.y) {
			drawY = Math.max(
				0,
				this.mapSize.y - Math.floor(this.canvas.height / this.cellSize)
			);
		}

		return { drawX, drawY };
	}

	run() {
		if (!this.player || !this.canvas || !this.mapSize || !this.map) {
			return;
		}
		this.player.update();

		const { drawX, drawY } = this.getMapInitVals();

		this.map.drawSimple(drawY, drawX);
		this.player.draw();
	}
}
