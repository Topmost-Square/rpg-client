import { Building } from './buildings/Building';

export class Game {
	canvas: HTMLCanvasElement | null = null;
	ctx: CanvasRenderingContext2D | null = null;
	buildings: Building[] = [];

	setCanvas(canvas: HTMLCanvasElement | null): void {
		this.canvas = canvas;
	}

	setContext(ctx: CanvasRenderingContext2D | null) {
		this.ctx = ctx;
	}

	setBuildings(buildings: Building[]): void {
		this.buildings = buildings;
	}

	run() {
		if (!this.canvas || !this.ctx) {
			return;
		}

		for (let i = 0; i <= 20; i++) {
			for (let j = 0; j <= 15; j++) {
				this.ctx.fillStyle = 'black';
				this.ctx.fillRect(i * 40, j * 40, 40, 40);
				this.ctx.strokeStyle = 'grey';
				this.ctx.strokeRect(i * 40, j * 40, 40, 40);
			}
		}

		for (let i = 0; i < this.buildings.length; i++) {
			//draw base building

			const building = this.buildings[i];
			this.ctx.fillStyle = building.color || 'red';
			if (building?.position) {
				this.ctx.fillRect(
					building.position.x * 40,
					building.position.y * 40,
					40,
					40
				);
			}
		}
	}
}
