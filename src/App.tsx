import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Player } from './gameEngine/Player';
import { Position } from './gameEngine/Position';
import { Controls } from './gameEngine/Controls';
import { Map } from './gameEngine/Map';

function App() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
	const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
	const [player, setPlayer] = useState<Player | null>(null);

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

			setPlayer(new Player());
		}
	}, []);

	const initPlayerPosition = new Position(50, 50);
	player?.setPosition(initPlayerPosition);
	player?.setCanvas(canvas);
	player?.setContext(context);
	player?.setControls(new Controls());

	const map = new Map();
	map.setCanvas(canvas);
	map.setContext(context);

	const animate = () => {
		if (canvas && context && player && map) {
			player.update();
			context.clearRect(0, 0, canvas.width, canvas.height);

			map.drawSimple();
			player.draw();
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
