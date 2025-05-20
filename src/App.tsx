import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Game } from './gameEngine/Game';
import { Building } from './gameEngine/buildings/Building';
import { Position } from './gameEngine/Position';
import { Controls } from './gameEngine/Controls';
function App() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
	const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

	useEffect(() => {
		if (canvasRef.current) {
			canvasRef!.current!.width = window.innerWidth;
			canvasRef!.current!.height = window.innerHeight;

			addEventListener('resize', () => {
				canvasRef!.current!.width = window.innerWidth;
				canvasRef!.current!.height = window.innerHeight;
			});

			setCanvas(canvasRef.current);
			setContext(canvasRef.current.getContext('2d'));
		}
	}, []);

	const game = new Game();
	game.setContext(context);
	game.setCanvas(canvas);
	game.setControls(new Controls());

	const buildings: Building[] = [];
	const mainBaseBuilding = new Building();
	// 10,7 multiplied by 40 - for now approx center of map
	mainBaseBuilding.setPosition(new Position(10, 7));
	mainBaseBuilding.setColor('blue');
	buildings.push(mainBaseBuilding);

	game.setBuildings(buildings);

	const animate = () => {
		if (canvas && context) {
			context.clearRect(0, 0, canvas.width, canvas.height);

			game.run();
		}
		requestAnimationFrame(animate);
	};

	animate();
	return (
		<>
			<canvas ref={canvasRef}></canvas>
		</>
	);
}

export default App;
