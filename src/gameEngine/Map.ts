export class Map {
	cellSize = 1;

	canvas: HTMLCanvasElement | null = null;
	ctx: CanvasRenderingContext2D | null = null;

	setCanvas(canvas: HTMLCanvasElement | null): void {
		this.canvas = canvas;
	}

	setContext(ctx: CanvasRenderingContext2D | null) {
		this.ctx = ctx;
	}

	map: Array<Array<number>> | null = null;

	setMap(map: Array<Array<number>>) {
		this.map = map;
	}

	setCellSize(cellSize: number) {
		this.cellSize = cellSize;
	}
	drawBottomLayer() {}

	drawTopLayer() {}

	//remove it once real map can be rendered
	drawSimple(rI: number = 0, cI: number = 0): void {
		if (!this.ctx || !this.canvas || !this.map) {
			return;
		}

		const maxRows = Math.min(
			this.map.length,
			rI + this.canvas.height / this.cellSize
		);
		const maxCols = Math.min(
			this.map[0].length,
			cI + this.canvas.width / this.cellSize
		);

		for (let rowIndex = Math.ceil(rI); rowIndex < maxRows; rowIndex++) {
			for (let cellIndex = Math.ceil(cI); cellIndex < maxCols; cellIndex++) {
				const color = this.map[rowIndex][cellIndex] === 1 ? 'green' : 'black';
				const strokeColor =
					this.map[rowIndex][cellIndex] === 1 ? 'grey' : 'white';

				this.ctx!.fillStyle = color;
				this.ctx!.fillRect(
					(cellIndex - cI) * this.cellSize,
					(rowIndex - rI) * this.cellSize,
					this.cellSize,
					this.cellSize
				);
				this.ctx!.strokeStyle = strokeColor;
				this.ctx!.strokeRect(
					(cellIndex - cI) * this.cellSize,
					(rowIndex - rI) * this.cellSize,
					this.cellSize,
					this.cellSize
				);
			}
		}
	}
}
