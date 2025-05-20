import { Position } from '../Position';

export class Building {
	position: Position | null = null;
	color: string | null = null;

	setPosition(position: Position) {
		this.position = position;
	}

	setColor(color: string | null) {
		this.color = color;
	}
}
