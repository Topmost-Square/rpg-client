export class Map {
	cellSize = 32;

	canvas: HTMLCanvasElement | null = null;
	ctx: CanvasRenderingContext2D | null = null;

	setCanvas(canvas: HTMLCanvasElement | null): void {
		this.canvas = canvas;
	}

	setContext(ctx: CanvasRenderingContext2D | null) {
		this.ctx = ctx;
	}

	map: Array<Array<number>> = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	];
	drawBottomLayer() {}

	drawTopLayer() {}

	//remove it once real map can be rendered
	drawSimple(): void {
		if (!this.ctx || !this.canvas) {
			return;
		}
		this.map.forEach((row, rowIndex) => {
			row.forEach((cell, cellIndex) => {
				if (cell === 0) {
					this.ctx!.fillStyle = 'black';
					this.ctx!.fillRect(
						cellIndex * this.cellSize,
						rowIndex * this.cellSize,
						this.cellSize,
						this.cellSize
					);
					this.ctx!.strokeStyle = 'white';
					this.ctx!.strokeRect(
						cellIndex * this.cellSize,
						rowIndex * this.cellSize,
						this.cellSize,
						this.cellSize
					);
				}
				if (cell === 1) {
					this.ctx!.fillStyle = 'green';
					this.ctx!.fillRect(
						cellIndex * this.cellSize,
						rowIndex * this.cellSize,
						this.cellSize,
						this.cellSize
					);
					this.ctx!.strokeStyle = 'grey';
					this.ctx!.strokeRect(
						cellIndex * this.cellSize,
						rowIndex * this.cellSize,
						this.cellSize,
						this.cellSize
					);
				}
			});
		});
	}
}
