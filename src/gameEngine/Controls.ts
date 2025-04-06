type ControlsType = {
	up: boolean;
	down: boolean;
	left: boolean;
	right: boolean;
};

type KeysType = keyof ControlsType;

export class Controls {
	controls: ControlsType = {
		up: false,
		down: false,
		left: false,
		right: false,
	};

	constructor() {
		addEventListener('keydown', (e: KeyboardEvent) => {
			const key = e.key.replace('Arrow', '').toLocaleLowerCase();
			if (key in this.controls) {
				this.controls[key as KeysType] = true;
			}
		});
		addEventListener('keyup', (e: KeyboardEvent) => {
			const key = e.key.replace('Arrow', '').toLocaleLowerCase();
			if (key in this.controls) {
				this.controls[key as KeysType] = false;
			}
		});
	}
}
