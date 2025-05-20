type ControlsType = {
	b: boolean;
	mouse: { x: number; y: number };
};

//todo: we would need different types of controls for main screen
// battle screen
// hero screen etc
// set it in app or game object upon scene(screen) switch
export class Controls {
	controls: ControlsType = {
		b: false, // b is for building
		mouse: { x: 0, y: 0 },
	};

	constructor() {
		addEventListener('keydown', (e: KeyboardEvent) => {
			if (e.key === 'b') {
				this.controls.b = !this.controls.b;
			}
		});

		addEventListener('mousemove', (e: MouseEvent) => {
			this.controls.mouse = { x: e.clientX, y: e.clientY };
		});
	}
}
