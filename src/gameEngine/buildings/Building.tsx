import { Position } from '../Position';

export class Building {
	position: Position | null = null;
	size: { x: number; y: number } = { x: 0, y: 0 };
	color: string | null = null;

	setPosition(position: Position) {
		this.position = position;
		return this;
	}

	setColor(color: string | null) {
		this.color = color;
		return this;
	}

	setSize(size: { x: number; y: number }) {
		this.size = size;
		return this;
	}
}
